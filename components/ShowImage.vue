<template>
    <div class="container">
        <div class="item" v-for="i in img_urls">
            <img src="./img/close.png" @click="close($index)" v-if="show_close" class="close">
            <my-image :img_url="i.url" :index="$index"></my-image>
        </div>
    </div>
</template>
<style>
    .item{
        margin-left: 10px;
        position: relative;
        float: left;
    }
    .close{
        width: 30px;
        height: 30px;
        position: relative;
        top:20px;
        left: -10px;
        z-index: 1;
    }
</style>
<script>
    import Image from './Image.vue'
    export default{
        components:{
            myImage:Image
        },
        props:{ //声明从父级接受参数
            img_urls:{ // [{url:'/static/a.png'},{url:'/static/a.png'},...]
                type:Array,
                required: true

            },
            show_close:{ // true or false 是否显示删除按钮
                type:Boolean,
                default:false
            }
        },
        methods:{
            close(index){
                this.img_urls.splice(index,1); // 删除数组中对应索引的元素
            }
        }
    }
</script>