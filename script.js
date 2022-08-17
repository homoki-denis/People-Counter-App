$(function () {
  let count = 0;

  $("#btn-increment").click(function () {
    count += 1;
    $("#people").text(count);
  });

  $("#btn-save").click(function () {
    $("#previous-people").append(count + " - ");
    $("#people").text(0);
    count = 0;
  });
});
