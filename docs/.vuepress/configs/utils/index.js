import { join } from "path";
import fs from 'fs'

// 字符串工具类
const str = {
    /**
     * 两个字符串是否相同
     * @param {String} string 第一个字符串
     * @param {String} substr 第二个字符串
     * @param {Boolean} isIgnoreCase 是否忽略大小写
     * @returns {Boolean} 相同为真，不同为假
     */
    contains: (string, substr, isIgnoreCase) => {
        //  大小转换成小写
        if (isIgnoreCase) {
            // toLowerCase() :把字符串转换为小写
            string = string.toLowerCase()
            substr = substr.toLowerCase()
        }
        // 截取单个字符
        let startChar = substr.substring(0, 1)
        // 获取字符串长度
        let strLen = substr.length
        for (let i = 0; i < string.length - strLen + 1; i++) {
            // charAt() :返回指定位置的字符
            if (string.charAt(i) === startChar) {
                // 如果从i开始的地方两个字符串一样,那就一样
                if (string.substring(i, i + strLen) === substr) { return true }
            }
        }
        return false
    }
}

/**
 * 自定义排序文件夹
 * @param  a
 * @param  b
 * @returns  { number }
 */

function sortDir (a, b) {
    let al = a.parent.toString().split("\\").length
    let bl = b.parent.toString().split("\\").length
    if (al > bl) {
        return -1
    }
    if (al === bl) {
        return 0
    }
    if (al < bl) {
        return 1
    }
}

// 文件助手
const filehelper = {
    /**
     *
     * @param {String} myPath 目录路径
     * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
     * @param {Array} SuffixIncludes 需要处理的文件后缀
     * @returns
     */
    getAllFiles: (myPath, unDirIncludes, SuffixIncludes) => {
        const fileNames = fs.readdirSync(myPath)
        if (!fileNames) {
            return []
        }
        let filenameList = []
        fileNames.forEach((file) => {
            let fileInfo = fs.statSync(myPath + file)
            if (fileInfo.isFile() && !unDirIncludes.includes(file) && !str.contains(file, "img", true)) {
                // 只处理固定后缀的文件
                let split = file.split('.')
                if (SuffixIncludes.includes(split[split.length - 1])) {
                    //  过滤readme.md文件
                    if (file === 'readme.md' || file === 'README.md') {
                        file = '0_readme'
                    } else {
                        //  截取MD文档后缀名
                        file = file.replace('.md', '')
                    }
                    filenameList.push(file)
                }
            }
        })
        //  排序
        filenameList.sort()
        return filenameList
    },
    /**
     *
     * @param {String} mypath 当前的目录路径
     * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
     * @returns {Array} result 所有的目录
     */
    getAllDirs: function getAllDirs (mypath = ".", unDirIncludes,) {
        // 获取目录数据
        const items = fs.readdirSync(mypath)
        let result = null
        // 遍历目录中所有文件夹
        items.map(item => {
            let temp = join(mypath, item)
            // isDirectory() 不接收任何参数,如果是目录(文件夹)返回true,否则返回false
            // 如果是目录,且不包含如下目录
            if (fs.statSync(temp).isDirectory() && !item.startsWith(".") && !unDirIncludes.includes(item)) {
                result.push(temp)
                result = result.concat(getAllDirs(temp, unDirIncludes))
            }
        })
        return result
    },

    /**
     *
     * @param {String} myPath 当前的目录路径
     * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
     * @returns {Array} result 所有的目录
     */
    getOneAllDirs: function getOneAllDirs (myPath = ".", unDirIncludes,) {
        // 获取目录数据
        const items = fs.readdirSync(myPath)
        if (!items) {
            return []
        }
        let result = []
        // 遍历目录中所有文件夹
        items.map(item => {
            let temp = join(myPath, item)
            // isDirectory() 不接收任何参数,如果是目录(文件夹)返回true,否则返回false
            // 如果是目录,且不包含如下目录
            if (fs.statSync(temp).isDirectory() && !item.startsWith(".") && !unDirIncludes.includes(item)) {
                result.push(myPath + item + '/')
            }
        })
        return result
    },
}

// 侧边栏创建工具
const sideBarTool = {
    genSideBarGroup : (rootPath, path, unDirIncludes, SuffixIncludes, sidebarsList) => {
        rootPath = rootPath.replace(/\\/g,"/").replace(/\/\//g,"/")
        path = path.replace(/\\/g,"/").replace(/\/\//g,"/")
        // console.log('rootPath',rootPath)
        let titlePath = path.replace(rootPath, "")
        let pageList = []
        let title = titlePath.split('/')[titlePath.split("/").length - 2]
        let isNumberRegex = /^-?\d+(\.\d+)?$/
        title.indexOf("_") !== -1 && isNumberRegex.test(title.substring(0, title.indexOf("_"))) ?
            title.substring(title.indexOf("_") + 1) : title
        let childrenSidebars = {
            text: title,
            collapsible: true,
            sidebarDepth: 2,
            children: pageList
        }

        // console.log('RootPath',titlePath)
        let files = filehelper.getAllFiles(path, unDirIncludes, SuffixIncludes)
        // console.log('files', files)
        if (files && files.length > 0) {
            files.forEach(item => {
                if (item !== '0_readme') {
                    pageList.push('/' + titlePath + item + '.md')
                } else {
                    pageList.push('/' + titlePath)
                }
            })
        }

        // 准备接收
        let allDirs = filehelper.getOneAllDirs(path, unDirIncludes)
        // console.log('allDirs', allDirs)
        if (allDirs && allDirs.length > 0) {
            allDirs.forEach((item) => {
                // console.log('item', item)
                let list = pageList && pageList.length > 0 ? pageList : sidebarsList
                sideBarTool.genSideBarGroup(rootPath, item, unDirIncludes, SuffixIncludes, list)
            })
        }
        if (pageList && pageList.length > 0) {
            sidebarsList.push(childrenSidebars)
        }
    }
}

/**
 * 创建一个侧边栏(带分组),支持多层级递归
 * @param {String} path 目录路径
 * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
 * @param {Array} SuffixIncludes 需要处理的文件后缀
 * @param {Array} sidebarsList 递归使用保存sidebar对象
 * @param {Number} sidebarDepth 递归使用保存sidebar对象
 * @returns {Array} 返回一个数组,如下所示
 * [{
 *  "title": "",
 *  "collapsable": true,
 *  "sidebarDepth": 2,
 *  "children": ["/view/"]
 *   },
 *  {
 *  "title": "GFW",
 *   "collapsable": true,
 *   "sidebarDepth": 2,
 *  "children": ["/view/GFW/"]
 *  },
 *  {
 *  "title": "html",
 *  "collapsable": true,
 *  "sidebarDepth": 2,
 *  "children": [
 *      ["/view/html/day1", "day1"],
 *      ["/view/html/day2", "day2"],
 *      ["/view/html/day3", "day3"],
 *      ["/view/html/day4", "day4"],
 *      ["/view/html/day5", "day5"]
 *    ]
 * }]
 */
function genSideBarGroup (path, unDirIncludes, SuffixIncludes, sidebarsList, sidebarDepth = 2) {

}

module.exports = { str, filehelper, sideBarTool }
