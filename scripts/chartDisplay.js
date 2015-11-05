(function(){
  if (typeof Display === 'undefined') {
    window.Display = {};
  };

  var Editor = Display.Editor = function() {
    // var piechart = Display.Piechart();
    var $form = $('form');
    var $submit = $('button');
    var data = [];

    Editor.prototype.listenForSubmit = function() {
      $form.submit(function(e) {
        e.preventDefault();
        debugger;
        data = $form.serializeArray();
        console.log(data)
      })
    };

  };
})();
