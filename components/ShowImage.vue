<template>
    <div class="show-img">
        <div class="item" v-for="i in img_urls">
            <img src="./img/close.png" @click="delete($index)" v-if="show_del_icon" class="delete">
            <my-image :img_url="i.url" :index="$index"></my-image>
        </div>
        <div class="view panel" v-show="view_state" @click="view_close">
            <img :src="view_url" alt="">
        </div>
    </div>
</template>

<style>
    .item{
        margin-left: 10px;
        position: relative;
        float: left;
    }
    .delete{
        width: 30px;
        height: 30px;
        position: relative;
        top:20px;
        left: -10px;
        z-index: 1;
    }
    .view{
        background-color: #888;
        position: fixed;
        width: 600px;
        height: 600px;
        top:50%;
        left: 50%;
        margin: -300px 0 0 -300px;
        padding-top: auto;
        padding-bottom: auto;
        padding: 20px 20px;
        text-align: center;
        z-index: 99999;
    }
    .view img{
        max-height: 550px;
        max-width: 550px;
    }
</style>

<script>
    import Image from './Image.vue'
    export default{
        components:{
            myImage:Image
        },
        data(){
            return{
                view_state:false,
                view_url:''
            }
        },
        props:{ //声明从父级接受参数
            img_urls:{ // [{url:'/static/a.png'},{url:'/static/a.png'},...]
                type:Array,
                required: true

            },
            show_del_icon:{ // true or false 是否显示删除按钮
                type:Boolean,
                default:false
            },
            view_state_set:{ // true or false 是否显示大图
                type:Boolean,
                default:true
            }

        },
        methods:{
            delete(index){
                this.img_urls.splice(index,1); // 删除数组中对应索引的元素
                console.log('删除后的数据为:',this.img_urls); //输入删除后的数据
                for(var i in this.img_urls){ //遍历出剩下的数据
                    console.log(this.img_urls[i].url);
                }
            },
            view_close(){
                this.view_state = false
            }
        },
        events:{
            'view':function(url){
                console.log('父组件的:',url);
                if(!this.view_state_set) return;
                this.view_url = url;
                this.view_state = true;
            }
        }
    }
</script>