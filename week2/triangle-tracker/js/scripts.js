function triangleType(s1, s2, s3) {
  if (s1 + s2 <= s3 || s1 + s3 <=s2 || s2 + s3 <= s1) {
    return "Not a triangle";
  }
  if (s1 === s2 && s1 === s3 && s2 === s3) {
    return "Equilateral";
  } else if (s1 !== s2 && s1 !== s3 && s2 !== s3) {
    return "Scalene";
  } else if (s1 === s2 || s1 === s3 || s2 === s3) {
    return "Isosceles";
  }
}

//
$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());

    var type = triangleType(side1, side2, side3);

    $("#output").empty();
    $("#output").append("<p>" + type + "</p>");
    event.preventDefault();
  });
});
