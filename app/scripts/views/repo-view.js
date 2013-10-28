GitHUD.Views.RepoView = Backbone.View.extend({

  initialize: function (options) {
    // console.log('cool')

    // get the this.el into the page
    $("#donut-stage").append(this.el)

    // listen for this view's model to change, then render
    this.listenTo(this.model, 'change', function(model){
      this.render(model)
      // initiate isotope after rendering
      $('#donut-stage').isotope({ sortBy : 'name' });
    })

    // then set it all in motion with a fetch!
    this.model.fetch()
  },

  render: function() {

    // add the legend and title
    renderedTemplate = JST["app/templates/repo.html"]({
      repo: this.model
    })
    this.$el.append(renderedTemplate)

    //create a hidden div for sorting with isotope
    sortingInfo = JST['app/templates/sorting-info.html']
    this.$el.append(sortingInfo({
      sortData: this.model.get('gitHUDMeta').sortData
    }))

    var ctx = $("#donut-chart-" + this.model.get('id')).get(0).getContext("2d");
    new Chart(ctx).Doughnut(this.model.get('gitHUDMeta').donutData);

    console.log('githubmeta',this.model.get('gitHUDMeta').graphData)
    var ctx2 = $("#line-chart-" + this.model.get('id')).get(0).getContext("2d");


var data = {
    datasets : [
        {
            data : [65, 59, 90, 81, 56, 55, 40],
            fillColor : "#000",
            strokeColor : "#000",
            pointColor : "#000",
            pointStrokeColor : "#fff"
        }
    ],
    labels : ["January","February","March","April","May","June","July"],
}
    // var data = this.model.get('gitHUDMeta').graphData
    // console.log(this.model.get('gitHUDMeta').graphData.datasets.data)
    new Chart(ctx2).Line(this.model.get('gitHUDMeta').graphData);
    // new Chart(ctx2).Line(data)

  }
})
