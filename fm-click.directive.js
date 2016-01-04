export default function ($parse) {
  'ngInject';
  return {
    compile: function($element, attr) {
      var fn = $parse(attr["fmClick"]);
      return function(scope, element, attr) {
        element.on("click", function(event) {
          fn(scope, {$event:event, $element: element });
        });
      };
    }
  }
}
