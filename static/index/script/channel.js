(function(){var n,a,e,t;n=$("#btn-toggle-channel"),a=$("#area-channel-channel > .inner"),n.one("click",function(){return a.find(".thumb").each(function(){var n,a;if(a=(n=$(this)).data().thumb)return a=`url(${a})`,n.css({backgroundImage:a})})}),n.on("click",function(){return n.toggleClass("active"),a.toggleClass("status-folded")}),function(){var n;if((n=$("#area-article-channel")).length)n.on("click","span.channel",function(n){return n.preventDefault(),n.stopPropagation(),location.href=`/channel/${$(this).data().cid}`})}(),$("#area-article-channel").on("click","span.btn-reset-date",function(){return app.fn.remove($(this)),location.search=""}),e=$("#card-calendar-channel"),(t=app.model.card(e)).render=function(){var n,a,t,c;return(t=$.serialize(location.search)).date?(n=t.date,[c,a]=[n.slice(0,4),parseInt(n.slice(4))]):(n=new Date,[c,a]=[n.getFullYear(),1+n.getMonth()]),e.find(`.item-year[data-value='${c}']`).click(),e.find(`.item-month[data-value='${a}']`).click()},t.submit=function(){var n;return n=[t.year,t.month].join(t.month<10?"0":""),location.search=`date=${n}`},t.bindShadow(),e.on("click","button.btn-close",function(){return t.hide()}),e.on("click","li:not(.active)",function(){var n;return(n=$(this)).switchClass("active"),n.hasClass("item-year")?t.year=n.data().value:t.month=n.data().value}),$("#btn-submit-calendar").on("click",function(){return t.submit(),t.hide()}),$("#btn-calendar-channel").on("click",function(){return t.render(),t.show()}),$("#btn-more-channel").on("click",function(){return $("#btn-calendar-channel").click()}),$("#area-comment-channel").on("click",".avatar",function(){return $(this).animateBy("animated rubberBand")}),app.fn.lazyLoad(["#area-article-channel .thumb","#area-series-channel .thumb","#area-recommend-channel .thumb"])}).call(this);