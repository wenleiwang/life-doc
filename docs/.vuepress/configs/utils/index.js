const PATH = require('path')
const fs = require('fs')

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
     * @param {String} rpath 目录路径
     * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
     * @param {Array} SuffixIncludes 需要处理的文件后缀
     * @returns
     */
    getAllFiles: (rpath, unDirIncludes, SuffixIncludes) => {
        let filenameList = []
        rpath = rpath.replace(/\\/g,"/").replace(/\/\//g,"/")
        const fileNames = fs.readdirSync(rpath)
        fileNames.forEach((file) => {
            let fileInfo = fs.statSync(rpath + file)
            if (fileInfo.isFile() && !unDirIncludes.includes(file) && !str.contains(file, "img", true)) {
                // 只处理固定后缀的文件
                let split = file.split('.')
                if (SuffixIncludes.includes(split[split.length - 1])) {
                    //  过滤readme.md文件
                    if (file === 'readme.md' || file === 'README.md') {
                        file = ''
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
        let result = []
        // 遍历目录中所有文件夹
        items.map(item => {
            let temp = PATH.join(mypath, item)
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
     * @param {String} mypath 当前的目录路径
     * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
     * @returns {Array} result 所有的目录
     */
    getOneAllDirs: function getOneAllDirs (mypath = ".", unDirIncludes,) {
        mypath = mypath.replace(/\\/g,"/").replace(/\/\//g,"/")
        // 获取目录数据
        const items = fs.readdirSync(mypath)
        let result = []
        // 遍历目录中所有文件夹
        items.map(item => {
            let temp = PATH.join(mypath, item)
            // isDirectory() 不接收任何参数,如果是目录(文件夹)返回true,否则返回false
            // 如果是目录,且不包含如下目录
            if (fs.statSync(temp).isDirectory() && !item.startsWith(".") && !unDirIncludes.includes(item)) {
                result.push(mypath + '\\' + item + '\\')
            }
        })
        return result
    }
}

// 侧边栏创建工具
const sideBarTool = {
    /**
     * 创建一个侧边栏,支持多层级递归
     * @param {String} RootPath 目录路径
     * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
     * @param {Array} SuffixIncludes 需要处理的文件后缀
     * @returns {Object} 返回一个对象,如下所示
     *
     * {
     * '/view/GFW/': [ 'index' ],
     * '/view/git/': [ 'index' ],
     * '/view/html/': [ 'day1', 'day2', 'day3', 'day4', 'day5' ],
     * }
     *
     */
    genSideBar: (RootPath, unDirIncludes, SuffixIncludes) => {
        let sidebars = {}
        let allDirs = filehelper.getAllDirs(RootPath, unDirIncludes)
        allDirs.forEach(item => {
            let dirFiles = filehelper.getAllFiles(item, unDirIncludes, SuffixIncludes)
            let dirname = item.replace(RootPath, "")
            dirname = dirname.replace(/\\/g, '/')
            if (dirFiles.length > 0) {
                sidebars[dirname] = dirFiles
            }
        })
        return sidebars
    },
    /**
     * 创建一个侧边栏(带分组),支持多层级递归
     * @param {String} RootPath 目录路径
     * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
     * @param {Array} SuffixIncludes 需要处理的文件后缀
     * @param {Object} param3 暂未用上(分组相关配置参数)
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
    genSideBarGroup: (RootPath, unDirIncludes, SuffixIncludes, { title = '', children = [''], collapsable = true, sidebarDepth = 2 }) => {
        console.log('RootPath',RootPath)
        // 准备接收
        let sidebars = {}
        let allDirs = filehelper.getOneAllDirs(RootPath, unDirIncludes)
        allDirs.forEach((item) => {
            let dirname = item.replace(RootPath, "").replace(/\\/g, '/')
            let children = filehelper.getAllFiles(item, unDirIncludes, SuffixIncludes)
            let onePages = []

            if (children) {
                children.forEach(item => {
                    if (item) {
                        onePages.push('/view' + dirname + item + '.md')
                    } else {
                        onePages.push('/view' + dirname)
                    }
                })
            }

            let nextFile = filehelper.getOneAllDirs(item, unDirIncludes)
            if (nextFile) {
                let titleTemp = item.replace(RootPath + '\\view', "").replace(/\\/g, '')

                nextFile.forEach(i => {
                    let dirTwo = i.replace(RootPath, "").replace(/\\/g, '/').replace(/\/\//g, '/')
                    let twoFiles = filehelper.getAllFiles(i, unDirIncludes, SuffixIncludes)
                    console.log('twoFiles' + i,twoFiles)
                    if (twoFiles) {
                        let twoPages = []
                        twoFiles.forEach(twoName => {
                            if (twoName) {
                                twoPages.push('/view' + dirTwo + twoName + '.md')
                            } else {
                                twoPages.push('/view' + dirTwo)
                            }
                        })
                        dirTwo = dirTwo.replace(titleTemp, "")
                        title = dirTwo.split("/")[dirTwo.split("/").length - 2]
                        let Obj = {
                            text: title,
                            collapsible: true,
                            sidebarDepth: 2,
                            children: twoPages
                        }
                        onePages.push(Obj)
                    }

                })

            }
            sidebars['/view' + dirname] = onePages
            // sidebars.push(Obj)
        })
        return sidebars
    }
}

module.exports = { str, filehelper, sideBarTool }
