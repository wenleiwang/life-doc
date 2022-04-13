# 日历


<dev>
<dev v-for="i in 10">
    <dev v-for="j in numbers">
        <span v-if="i == 1">星期{{ j }}</span>
    </dev>
</dev>
</dev>

<script>
    
    data() {
        return {
            numbers: 7
            month : getMonth()
        }
    }
</script>