this.JST=this.JST||{},this.JST["app/templates/fullscreen-linechart.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+="<canvas id='line-chart-"+(null==(__t=repo.id)?"":__t)+"' class=\"fullscreen-linechart\" width='"+(null==(__t=window.innerWidth)?"":__t)+"' height='"+(null==(__t=.4*window.innerHeight)?"":__t)+"'></canvas>\n";return __p},this.JST["app/templates/fullscreen.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape,Array.prototype.join}with(obj)__p+='<div class="fullscreen-container">\n  <div class="fullscreen" id="fullscreen-repo-'+(null==(__t=repo.id)?"":__t)+'">\n      <span class="ss-contract" id="exit-fullscreen"></span>\n    <div class="slideshow-controls">\n      <span class="ss-skipback" id="previousRepo" data-slideshow="previous-repo"></span>\n      <span class="ss-rewind" id="previousSlide" data-slideshow="previous"></span>\n      <span class="ss-play" id="startSlideshow" data-slideshow="play"></span>\n      <span class="ss-pause" id="startSlideshow" data-slideshow="stop"></span>\n      <span class="ss-fastforward" id="nextSlide" data-slideshow="next"></span>\n      <span class="ss-skipforward" id="nextRepo" data-slideshow="next-repo"></span>\n      <input id="switch-repos" type="checkbox" name="checkbox" value="value" checked>\n      <span>Switch Repos</span>\n\n    </div>\n    <div class="legend-destination"></div>\n    <div id="repo-heading">\n      <img src="'+(null==(__t=repo.get("owner").avatar_url)?"":__t)+'" style="border: 2px solid '+(null==(__t=repo.get("userColor"))?"":__t)+';">\n\n      <h3>\n        <span class="title">\n          '+(null==(__t=repo.get("name"))?"":__t)+'\n        </span>\n        <br>\n        <span class="owner" style="color: '+(null==(__t=repo.get("userColor"))?"":__t)+';">\n          '+(null==(__t=repo.get("owner").login)?"":__t)+'\n        </span>\n\n      </h3>\n    </div>\n\n    <br>\n\n\n      <div class="donut-top-five-wrapper">\n        <div class="donut-top-five">\n\n        ',_.each(repo.get("gitHUDMeta").contributors,function(a,b){__p+='\n\n            <span class="darkened-text">'+(null==(__t=repo.get("gitHUDMeta").commits[b])?"":__t)+'&nbsp;COMMITS</span>\n          <span style="color: '+(null==(__t=a.color)?"":__t)+';">\n            <span class="top-five-user">'+(null==(__t=a.username)?"":__t)+'</span>\n            <span class="ss-piechart"></span>\n          </span>\n          <br>\n        '}),__p+="\n\n        </div>\n      </div>\n\n\n  <canvas id='donut-chart-"+(null==(__t=repo.id)?"":__t)+"' class=\"fullscreen-donut\" width='"+(null==(__t=GitHUD.utilities.responsive.ipadDonut("ipadDonutChart"))?"":__t)+"' height='"+(null==(__t=GitHUD.utilities.responsive.ipadDonut("ipadDonutChart"))?"":__t)+'\'></canvas>\n  <span class="linechart-destination"></span>\n  <div class="fullscreen-ticker ticker-text">\n\n  </div>\n  </div>\n</div>\n';return __p},this.JST["app/templates/gettingStarted.html"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<div class="welcome-title">\n  <h1>Welcome</h1>\n  <p>Add some users to get started</p>\n</div>\n\n\n  <button class="menu-button" id="getting-started-add-users" data-toggle="modal" href="#addusers">Add Users</button>\n\n';return __p},this.JST["app/templates/linechartLegend.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<!-- removed this empty div because it didn\'t seem to be used and occasionally covered up the icon -->\n<!-- <div class="legend"></div> --> \n  <div class="fsLegend">\n    <div class="fsCatagory" style="color:'+(null==(__t=repo.get("userColor"))?"":__t)+';">\n      <span class="'+(null==(__t=legend.icon)?"":__t)+'" ></span>'+(null==(__t=legend.catagory)?"":__t)+'\n    </div>\n    <div class="fsDataCount">\n      '+(null==(__t=legend.dataCount)?"":__t)+" TOTAL <br> "+(null==(__t=legend.catagory)?"":__t)+"\n    </div>\n  </div>\n</div>";return __p},this.JST["app/templates/menu.html"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<div class="left-menu">\n  <h1>GitHUD</h1>\n\n  <div id="sort-by">\n    <div class="large-view-btns">\n\n      <button id="sort-commits" class="menu-button" data-isotope="sort"><span class="ss-loading"></span>&nbsp;Commits</button>\n      <button id="sort-contributors" class="menu-button" data-isotope="sort"><span class="ss-usergroup"></span>&nbsp;Contributors</button>\n      <button id="sort-additions" class="menu-button" data-isotope="sort"><span class="ss-plus"></span>&nbsp;Additions</button>\n      <button id="sort-deletions" class="menu-button" data-isotope="sort"><span class="ss-delete"></span>&nbsp;Deletions</button>\n      <button id="sort-size" class="menu-button" data-isotope="sort"><span class="ss-layergroup"></span>&nbsp;Size</button>\n\n    </div>\n\n    <div class="medium-view-btns">\n\n      <button type="button" class="menu-button dropdown-toggle" data-toggle="dropdown">\n        Sort <span class="caret"></span>\n      </button>\n      <ul class="dropdown-menu" role="menu">\n\n        <button id="sort-commits" class="menu-button" data-isotope="sort"><span class="ss-loading"></span>&nbsp;Commits</button>\n        <button id="sort-contributors" class="menu-button" data-isotope="sort"><span class="ss-usergroup"></span>&nbsp;Contributors</button>\n        <button id="sort-additions" class="menu-button" data-isotope="sort"><span class="ss-plus"></span>&nbsp;Additions</button>\n        <button id="sort-deletions" class="menu-button" data-isotope="sort"><span class="ss-delete"></span>&nbsp;Deletions</button>\n        <button id="sort-size" class="menu-button" data-isotope="sort"><span class="ss-layergroup"></span>&nbsp;Size</button>\n\n      </ul>\n\n    </div>\n\n    <div class="btn-group">\n      <button type="button" class="menu-button dropdown-toggle" data-toggle="dropdown">\n        Filter <span class="caret"></span>\n      </button>\n      <ul class="dropdown-menu" role="menu">\n        <li><a href="#" id="filter-by" data-filter="*">All</a></li>\n        <li><a href="#" id="filter-by" data-filter=".multi-contrib">Multiple Commiters</a></li>\n\n      </ul>\n    </div>\n\n      <div class="add-user-button">\n        <button class="menu-button" id="add-user-btn" data-toggle="modal" href="#addusers">\n                <span class="ss-plus"></span>\n                <span class="ss-users"></span>\n\n            </button>\n      </div>\n    </div>\n\n</div>\n';return __p},this.JST["app/templates/modal.html"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<div class="modal fade" id="addusers" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h4 class="modal-title">New User</h4>\n      </div>\n      <div class="modal-body">\n          <button type="button" class="btn btn-primary" id="add-more-user-inputs">Add More Users...</button>\n        <input type="text" class="form-control" placeholder="Github Username" value="jhendley25">  \n      </div>\n      <div class="modal-footer">\n\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary" id="submit-user-request" data-dismiss="modal">Submit</button>\n      </div>\n    </div>\n  </div>\n</div> ';return __p},this.JST["app/templates/repo.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<span class="ss-expand" id="fullscreen"></span>\n<h3><span class="owner-title" style="color: '+(null==(__t=repo.get("userColor"))?"":__t)+'">\n      '+(null==(__t=repo.get("owner").login)?"":__t)+'\n  </span>\n  <span class="repo-title">\n      '+(null==(__t=repo.get("name"))?"":__t)+'\n  </span>\n  <span class="muted-text">Top Contributer: </span>\n  <span style="color: '+(null==(__t=GitHUD.utilities.color(repo.get("gitHUDMeta").tickerData.topCommiter.allTime.user))?"":__t)+'">'+(null==(__t=repo.get("gitHUDMeta").tickerData.topCommiter.allTime.user)?"":__t)+'</span class="muted-text">\n\n</h3><br>\n\n<canvas id=\'line-chart-'+(null==(__t=repo.id)?"":__t)+"' class=\"line-chart\" width='"+(null==(__t=GitHUD.utilities.responsive.width("smallLinechart"))?"":__t)+"' height='"+(null==(__t=GitHUD.utilities.responsive.height("smallLinechart"))?"":__t)+'\'></canvas>\n<div id="donut-chart">\n<!--   <div class="inner-donut-legend">\n      <span>'+(null==(__t=repo.get("gitHUDMeta").contributors.length)?"":__t)+"</span><br>\n      "+(null==(__t=repo.get("gitHUDMeta").contributors.length>1?"contributors":"contributor")?"":__t)+"\n  </div> -->\n<canvas id='donut-chart-"+(null==(__t=repo.id)?"":__t)+"' class=\"donut-chart\" width='110' height='110'></canvas>\n</div>\n\n<div id=\"bottom-ticker\" style=\"color: "+(null==(__t=repo.get("userColor"))?"":__t)+' !important;">\n    <h6>\n      <span class="ss-loading">'+(null==(__t=repo.get("gitHUDMeta").tickerData.ttlCommits)?"":__t)+'&nbsp;<span class="muted-text">COMMITS</span></span>\n      <span class="ss-plus">'+(null==(__t=repo.get("gitHUDMeta").tickerData.ttlAdditions)?"":__t)+'&nbsp;<span class="muted-text">ADDITIONS</span></span>\n      <span class="ss-delete">'+(null==(__t=repo.get("gitHUDMeta").tickerData.ttlDeletions)?"":__t)+'&nbsp;<span class="muted-text">DELETIONS</span></span>\n      <span class="ss-fork">'+(null==(__t=repo.get("forks"))?"":__t)+'&nbsp;<span class="muted-text">FORKS</span></span>\n\n    </h6>\n\n</div>\n';return __p},this.JST["app/templates/showcase.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<div class="modal fade" id="repoId-'+(null==(__t=repoData.get("id"))?"":__t)+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h4 class="modal-title">\n          '+(null==(__t=repoData.get("name"))?"":__t)+'\n        </h4>\n      </div>\n      <div class="modal-body">\n          <h1>Showcase</h1>\n          <h3>total commits: '+(null==(__t=repoData.get("gitHUDMeta").sortData.commitCount)?"":__t)+"</h3>\n          <h3>total contributors: "+(null==(__t=repoData.get("gitHUDMeta").sortData.contribCount)?"":__t)+"</h3>\n          <h3>total commits: "+(null==(__t=repoData.get("gitHUDMeta").sortData.commitCount)?"":__t)+"</h3>\n          <h3>total commits: "+(null==(__t=repoData.get("gitHUDMeta").sortData.commitCount)?"":__t)+'</h3>\n      <div class="modal-footer">\n\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        \n      </div>\n    </div>\n  </div>\n</div> ';return __p},this.JST["app/templates/sorting-info.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<div class="hidden" id="sorting-info">\n    <ul>\n        <li class="commits">'+(null==(__t=sortData.commitCount)?"":__t)+'</li>\n        <li class="contributors">'+(null==(__t=sortData.contribCount)?"":__t)+'</li>\n        <li class="additions">'+(null==(__t=sortData.additions)?"":__t)+'</li>\n        <li class="deletions">'+(null==(__t=sortData.deletions)?"":__t)+'</li>\n        <li class="size">'+(null==(__t=sortData.repoSize)?"":__t)+"</li>\n    </ul>\n</div>\n";return __p},this.JST["app/templates/ticker.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<div class="marquee">\n  Top Commiter (all-time):\n  <span class="ticker-user">\n    '+(null==(__t=repo.get("gitHUDMeta").tickerData.topCommiter.allTime.user)?"":__t)+", "+(null==(__t=repo.get("gitHUDMeta").tickerData.topCommiter.allTime.commits)?"":__t)+'\n  </span>\n  &nbsp;&nbsp;&nbsp;&nbsp;\n  Top Commiter (weekly):\n  <span class="ticker-user">\n    '+(null==(__t=repo.get("gitHUDMeta").tickerData.topCommiter.weekly.user)?"":__t)+", "+(null==(__t=repo.get("gitHUDMeta").tickerData.topCommiter.weekly.commits)?"":__t)+'\n  </span>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<br>\n  Recent Activity:\n  <span class="ticker-user">'+(null==(__t=repo.get("gitHUDMeta").latestCommit.author.login)?"":__t)+'</span>\n  &nbsp;commited&nbsp;\n  <span class="ticker-additions ss-plus">\n    '+(null==(__t=repo.get("gitHUDMeta").latestCommit.stats.additions)?"":__t)+'\n  </span>\n  &nbsp;and&nbsp;\n  <span class="ticker-deletions ss-hyphen">\n    '+(null==(__t=repo.get("gitHUDMeta").latestCommit.stats.deletions)?"":__t)+'\n  </span>\n  &nbsp;to&nbsp;\n  <span class="ticker-reponame">'+(null==(__t=repo.get("name"))?"":__t)+'</span>\n  &nbsp;-m&nbsp;\n  <span class="commit-message">"'+(null==(__t=repo.get("gitHUDMeta").latestCommit.commitMessage)?"":__t)+'"</span>\n</div>\n';return __p},this.JST["app/templates/username-input.html"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<input type="text" class="form-control"  placeholder="Github Username">';return __p},this.JST["app/templates/welcome.html"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<div class="welcome-title">\n  <h1>Welcome</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</div>\n<div class="login-buttons">\n  <a class="login btn btn-primary btn-block" href="https://github.com/login/oauth/authorize?client_id='+(null==(__t=ENV.gitHubClientId)?"":__t)+'">Log In</a>\n  <a class="logout btn btn-primary btn-block" href="/">Log Out</a>\n</div>';return __p};