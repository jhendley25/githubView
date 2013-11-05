GitHUD.Views.FullScreenView = Backbone.View.extend({

  events: {
    'click #exit-fullscreen' : 'exitFullscreen'
  },


  initialize: function (options) {
    // console.log('cool')
    //hide the content behind the fullscreen view
    $(".donut-stage").css('display', 'none')

    // get the this.el into the page
    $(".fullscreen-stage").append(this.el)
    this.render()

    //web ticker freezes and stuff
    this.initMarquee()
    // listen for this view's model to change, then render

  },

  render: function() {

    // apply the fullscreen template
    renderedTemplate = JST["app/templates/fullscreen.html"]({
      repo: this.model
    })
    tickerTemplate = JST["app/templates/ticker.html"]({
      repo: this.model
    })
    this.$el.append(renderedTemplate)
    $(".fullscreen-ticker").append(tickerTemplate)

    var ctx = $("#donut-chart-" + this.model.get('id')).get(0).getContext("2d");
    new Chart(ctx).Doughnut(this.model.get('gitHUDMeta').donutData);

    // console.log('githubmeta',this.model.get('gitHUDMeta').graphData)
    var ctx2 = $("#line-chart-" + this.model.get('id')).get(0).getContext("2d");

    var maxCommits = _.max(this.model.get('gitHUDMeta').graphData.truncatedWeeklyData.datasets[0].data, function(x){ return x })
    if ( maxCommits > 9) {
      // let the scale be automatically calculated if at least one of the data points is 10+
      new Chart(ctx2).Line(this.model.get('gitHUDMeta').graphData.truncatedWeeklyData, {
        scaleShowGridLines : false,
        animation: false,
        scaleSteps : 5,
        scaleStepWidth : Math.floor(maxCommits / 5),
        scaleStartValue : 0,
        scaleOverride : true,
        animation: false
      })
    } else {
      // manually specify the scale because none of the data points were over 9
      new Chart(ctx2).Line(this.model.get('gitHUDMeta').graphData.truncatedWeeklyData, {
        scaleShowGridLines : false,
        scaleSteps : 5,
        scaleStepWidth : 2,
        scaleStartValue : 0,
        scaleOverride : true,
        animation: false
      });
    }
  },

  exitFullscreen: function(){
    this.$el.remove()
    $(".donut-stage").css('display', 'inline-block')
  },

  initMarquee: function(){
    $('.marquee').marquee({
    //speed in milliseconds of the marquee
        speed: 15000,
        //gap in pixels between the tickers
        gap: 50,
        //gap in pixels between the tickers
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left'
    });

  }
})