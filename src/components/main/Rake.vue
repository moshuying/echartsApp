<template>
    <div class="main">
        <!-- TODO:头部导航栏 -->
        <header>
            <div class="time">23:02</div>
            <div class="power">
                <div class="signal">
                    <div class="black"></div>
                    <div class="black"></div>
                    <div class="black"></div>
                    <div class="black"></div>
                </div>
                <p style="font-size:1.4rem">4G</p>
                <div class="powerIcon">
                    <div class="outside">
                        <div class="inside"></div>
                    </div>
                    <div class="cir"></div>
                </div>
            </div>
        </header>
        <!-- TODO:日历菜单 -->
        <div class="nav">
            <div class="left">
                <i class="iconfont icon-zuojiantou"></i>
                2019年5月
            </div>
            <div class="right">
                <div class="touch">
                    <div class="menu">
                        <div class="one"></div>
                        <div class="two"></div>
                        <div class="two"></div>
                    </div>
                </div>
                <div class="touch">
                    <i class="iconfont icon-sousuo"></i>
                </div>
                <div class="touch">
                    <div class="add">
                        <div class="one"></div>
                        <div class="two"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- TODO:周标记 -->
        <div class="weeked">
            <ul>
                <li>日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
            </ul>
        </div>
        <hr>
        <!-- TODO:日历主体 -->
        <div class="calendar">
            <div class="line">
                <div class="data">
                    <div class="block"><p></p><p></p></div>
                    <div class="block"><p></p><p></p></div>
                    <div class="block"><p></p><p></p></div>
                    <div class="block"><p>1</p><p>廿七</p></div>
                    <div class="block"><p>2</p><p>廿八</p></div>
                    <div class="block"><p>3</p><p>廿九</p></div>
                    <div class="block"><p>4</p><p>三十</p></div>
                </div>
            </div>
            <div class="line">
                <div class="data">
                    <div class="block"><p>5</p><p class="pActive">四月</p></div>
                    <div class="block"><p>6</p><p>初二</p></div>
                    <div class="block blockActive"><p>7</p><p>初三</p></div>
                    <div class="block"><p>8</p><p>初四</p></div>
                    <div class="block"><p>9</p><p>初五</p></div>
                    <div class="block"><p>10</p><p>初六</p></div>
                    <div class="block"><p>11</p><p>初七</p></div>
                </div>
            </div>
            <div class="line">
                <div class="data">
                    <div class="block"><p>12</p><p>初八</p></div>
                    <div class="block"><p>13</p><p>初九</p></div>
                    <div class="block"><p>14</p><p>初十</p></div>
                    <div class="block"><p>15</p><p>十一</p></div>
                    <div class="block"><p>16</p><p>十二</p></div>
                    <div class="block"><p>17</p><p>十三</p></div>
                    <div class="block"><p>18</p><p>十四</p></div>
                </div>
            </div>
            <div class="line">
                <div class="data">
                    <div class="block"><p>19</p><p>十五</p></div>
                    <div class="block"><p>20</p><p>十六</p></div>
                    <div class="block"><p>21</p><p>十七</p></div>
                    <div class="block"><p>22</p><p>十八</p></div>
                    <div class="block"><p>23</p><p>十九</p></div>
                    <div class="block"><p>24</p><p>二十</p></div>
                    <div class="block"><p>25</p><p>廿一</p></div>
                </div>
            </div>
            <div class="line">
                <div class="data">
                    <div class="block"><p>26</p><p>廿二</p></div>
                    <div class="block"><p>27</p><p>廿三</p></div>
                    <div class="block"><p>28</p><p>廿四</p></div>
                    <div class="block"><p>29</p><p>廿五</p></div>
                    <div class="block"><p>30</p><p>廿六</p></div>
                    <div class="block"><p>31</p><p>廿七</p></div>
                    <div class="block"><p></p><p></p></div>
                </div>
            </div>
        </div>
        <!-- TODO:日程 -->
        <div class="programme">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"><p>无日程</p></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <!-- TODO:底部操作栏 -->
        <div class="end">
            <div class="up">
                <a href="">今天</a>
                <a href="">日历</a>
                <a href="">收件箱</a>
            </div>
            <div class="ctrl"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rake",
        methods:{
            onload(){
                document.getElementsByTagName("html").style.fontSize="10px";
            }
        },mounted() {
            this.onload();
        }
    }
</script>

<style scoped>
    html{
        font-size: 10px;
    }
    body{
        background-color: #f8f6f6;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .main{
        /*font-size: 1.4rem;*/
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    header{
        width: 93%;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 400;
    }
    header .time{
        width: 6.5rem;
        max-width: 12.5rem;
        height: 0.9rem;
    }
    header .power{
        max-width:7.5rem;
        width: 5.8rem;
        height: 1.8rem;
        display: flex;
        justify-content: space-between;
        font-size: 0.3rem;
    }
    header .power .signal{
        width:3.7em;
        min-width: 3.5em;
        height: 3em;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    header .power .signal .black{
        height: 1em;
        width: 0.7em;
        border-radius: 2px;
        background-color: black;
    }
    header .power .signal .black:nth-child(1){
        height:0.9em;
    }
    header .power .signal .black:nth-child(2){
        height:1.3em;
    }
    header .power .signal .black:nth-child(3){
        height: 1.8em;
    }
    header .power .signal .black:nth-child(4){
        height: 2.3em;
        background-color: #c6c6c6;
    }
    header .power p{
        line-height: 18px;
        height: 1.8rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    header .power .powerIcon{
        width: 8em;
        height: 3em;
    }
    header .power .powerIcon .outside{
        border: 2px solid #949494;
        outline: 1px solid #f8f6f6;
        background-color: #f8f6f6;
        border-radius: 5px;
        max-width: 3.5rem;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    header .power .powerIcon .inside{
        border: 1px solid #f8f6f6;
        border-radius: 5px;
        background-color: #7ad777;
        width: 80%;
        height: 100%;
    }
    header .power .cir{
        background-color: #949494;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        position: relative;
        top: -0.78rem;
        left: 1.78rem;
        z-index: -1;
    }
    .nav{
        color: #eb4d3d;
        width: 98%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .nav .left{
        width: 8.7rem;
        display: flex;
        align-items: center;
    }
    .nav .right{
        height: 4rem;
        display: flex;
        justify-content: space-between;
    }
    .nav .right .touch{
        border-radius: 3px;
        width: 3.5rem;
        height: 3.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav .right .touch i{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 800;
    }
    .nav .right .touch .menu,.nav .right .touch .add{
        width: 1.8rem;
        height: 1.5rem;
    }
    .nav .right .touch:hover>.menu .one,.nav .right .touch:hover>.menu .two{
        border-color: #f8f6f6;
    }
    .nav .right .touch .menu .one{
        width: 100%;
        height: 1rem;
        border: 2px solid #eb4d3d;
    }
    .nav .right .touch .menu .two{
        margin-top: 2px;
        width: 100%;
        height: 1px;
        border: 1px solid #eb4d3d;
    }
    .nav .right .touch .add{
        height: 1px;
        width: 2rem;
    }
    .nav .right .touch:hover>.add .one,.nav .right .touch:hover>.add .two{
        border-color: #f8f6f6;
    }
    .nav .right .touch .add .one{
        width: 100%;
        height: 1px;
        border: 1px solid #eb4d3d;
    }
    .nav .right .touch .add .two{
        width: 100%;
        height: 1px;
        border: 1px solid #eb4d3d;
        transform: rotate(90deg);
        position: relative;
        top: -0.1rem;
    }
    .nav .right .touch:hover{
        color: #f8f6f6;
        background-color: #eb4d3d;
    }
    .active {
        color: #f8f6f6;
        background-color: #eb4d3d;
    }
    hr{
        width: 100%;
        height: 1px;
        border: 0;
        max-height: 1px;
        color: #b2b2b2;
        border-bottom: 1px solid;
    }
    .weeked{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .weeked ul{
        width: 93%;
        display: flex;
        justify-content: space-between;
    }
    .weeked li{
        list-style: none;
        width: 4em;
        float: left;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;

    }
    .weeked li:nth-child(1),.weeked li:nth-child(7){
        color: #a2a2a2;
    }
    .calendar{
        width: 100%;
        height: 30rem;
    }
    .calendar .line{
        width: 100%;
        border-bottom: 1px solid #cccccc;
        display: flex;
        justify-content: center;
        height: 6rem;
    }
    .calendar .line .data{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .calendar .line .data .block{
        width: 100%;
        height: 100%;
        text-align: center;
        font-weight: 400;
        height: 3em;
        width: 3em;
    }
    .calendar .line .data .block:nth-child(1){
        color: #a2a2a2;
    }
    .calendar .line .data .block:nth-child(7){
        color: #a2a2a2;
    }
    .calendar .line .data .block:hover{
        color: #f8f6f6;
        background-color: #eb4d3d;
        border-radius: 50%;
    }
    .calendar .line .data .blockActive{
        color: #f8f6f6;
        background-color: #eb4d3d;
        border-radius: 50%;
    }
    .pActive{
        border-bottom: 2px solid #eb4d3d;
    }
    .programme{
        width: 100%;
        height: 100%;
    }
    .programme .line{
        height: 4rem;
        border-bottom: 1px solid #cccccc;
    }
    .programme .line:nth-child(5){
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: #cccccc;
    }
    .end{
        position: fixed;
        bottom: 0;
        height: 7rem;
        width: 100%;
        background-color: #f8f8f8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
    }
    .end .up a{
        color: #eb4d3d;
    }
    .end .up{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .end .ctrl{
        margin-top:4rem ;
        width: 15rem;
        height: 0.5rem;
        background-color: black;
        border-radius: 6px;
    }
</style>
