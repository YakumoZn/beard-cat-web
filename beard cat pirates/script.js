//数据配置

const siteData = {
    title: "胡子猫导航站",
    subtitle: "我将跨越那七大洋与，你相见...",
    background: "https://i0.hdslb.com/bfs/article/72048afa5c619a80831b941c9ea0d8813a2bf230.png",
    
    //姑且是内容设置
    categories: [
        {
            name: "常用网站",
            sites: [
                {
                    name: "哔哩哔哩",
                    url: "https://www.bilibili.com",
                    image: "https://www.bilibili.com/favicon.ico",
                    color: "#F56C6C",
                    description: "国内知名的视频弹幕网站"
                },
                {
                    name: "百度",
                    url: "https://www.baidu.com",
                    image: "https://www.baidu.com/favicon.ico",
                    color: "#3388FF",
                    description: "全球最大的中文搜索引擎"
                },
                {
                    name: "GitHub",
                    url: "https://github.com",
                    image: "https://github.githubassets.com/favicons/favicon.png",
                    color: "#FF6A00",
                    description: "全球最大的代码托管平台"
                },
                {
                    name: "知乎",
                    url: "https://www.zhihu.com",
                    image: "https://static.zhihu.com/heifetz/favicon.ico",
                    color: "#1890FF",
                    description: "中文互联网高质量问答社区"
                }
            ]
        },
        {
            name: "学习",
            sites: [
                {
                    name: "freeCodeCamp",
                    url: "https://www.freecodecamp.org",
                    image: "https://www.freecodecamp.org/favicon-32x32.png",
                    color: "#13C2C2",
                    description: "免费学习编程的开发者社区"
                },
                {
                    name: "Udemy",
                    url: "https://www.udemy.com",
                    image: "https://www.udemy.com/staticx/udemy/images/v8/favicon-32x32.png",
                    color: "#722ED1",
                    description: "全球领先的学习平台"
                },
                {
                    name: "MDN Web Docs",
                    url: "https://developer.mozilla.org",
                    image: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
                    color: "#52C41A",
                    description: "提供开放网络技术文档"
                },
                {
                    name: "Stack Overflow",
                    url: "https://stackoverflow.com",
                    image: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico",
                    color: "#FA8C16",
                    description: "全球最大的程序员问答社区"
                }
            ]
        },
        {
            name: "工具",
            sites: [
                {
                    name: "Color Hunt",
                    url: "https://colorhunt.co",
                    image: "https://colorhunt.co/img/color-hunt-icon-ios.png",
                    color: "#F759AB",
                    description: "发现、分享和创建美丽的配色方案"
                },
                {
                    name: "Font Awesome",
                    url: "https://fontawesome.com",
                    image: "https://fontawesome.com/images/icons/icon-48x48.png",
                    color: "#2F54EB",
                    description: "互联网最流行的图标集和工具包"
                },
                {
                    name: "Unsplash",
                    url: "https://unsplash.com",
                    image: "https://unsplash.com/favicon-32x32.png",
                    color: "#A0D911",
                    description: "互联网上免费图片的精选来源"
                },
                {
                    name: "CodePen",
                    url: "https://codepen.io",
                    image: "https://cpwebassets.codepen.io/assets/favicon/favicon-touch-de50acbf5d634ec6791894eba4ba9cf490f709b3d742597c6fc4b734e6492a5a.png",
                    color: "#FA541C",
                    description: "前端设计人员的社交开发环境"
                }
            ]
        }
    ],
    
    //音乐设置
    music: {
        title: "Golden Hours",
        artist: "岩井映美里",
        url: "http://m801.music.126.net/20250709065134/07514f663d3dc418c2ddda700cbc35b0/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/45893423058/6593/e0da/475a/c090ace6683ca85ed34be1097a34a35a.mp3?vuutv=DkoUjOula2HRYbe4aJxDurPUmEE78JsEnqvy7oC3a2SB2VzTHV4ejfIH527ZfSpGIeVuktKIXH5yfNW8KK+Se3V2FmXLDW5lXopsySqGb4M=",
        cover: "http://p2.music.126.net/uUFj5363LsQsg8nOB0lzlg==/109951170197535189.jpg?param=100x100"
    }
};

//初始化
document.addEventListener('DOMContentLoaded', function() {
    //标题和副标题
    document.getElementById('site-title').textContent = siteData.title;
    document.getElementById('site-subtitle').textContent = siteData.subtitle;
    
    // 设置背景
    document.getElementById('header-bg').style.backgroundImage = 
        `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${siteData.background}')`;
    
    renderNavigationCards();
    
    //设置音乐信息
    document.getElementById('song-title').textContent = siteData.music.title;
    document.getElementById('song-artist').textContent = siteData.music.artist;
    
    //封面
    document.getElementById('album-cover').innerHTML = `
        <img src="${siteData.music.cover}" alt="${siteData.music.title}">
    `;
    
    //导航活动的链接
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    //初始化音乐播放器
    initMusicPlayer();
});

//渲染导航卡片
function renderNavigationCards() {
    const container = document.getElementById('content-container');
    container.innerHTML = '';
    
    siteData.categories.forEach(category => {
        const categoryHTML = `
            <div class="category">
                <h2 class="section-title">${category.name}</h2>
                <div class="cards-container">
                    ${category.sites.map(site => `
                        <div class="card">
                            <div class="card-img" style="background-color: ${site.color};">
                                <img src="${site.image}" alt="${site.name}">
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">${site.name}</h3>
                                <p class="card-desc">${site.description}</p>
                                <a href="${site.url}" class="card-link" target="_blank">访问网站</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        container.innerHTML += categoryHTML;
    });
}

//音乐播放器，其二
function initMusicPlayer() {
    const audio = document.getElementById('music-player');
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const volumeSlider = document.getElementById('volume-slider');
    
    //设置音乐源
    audio.src = siteData.music.url;
    
    // 播放/暂停
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        } else {
            audio.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        }
    });
    
    //音量控制，下面为切换歌曲(暂时报废)
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value;
    });
    
    document.getElementById('prev-btn').addEventListener('click', function() {
        console.log('上一首');
    });
    
    document.getElementById('next-btn').addEventListener('click', function() {
        console.log('下一首');
    });
}