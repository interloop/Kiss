// Dropdown
$('.dropdown-toggle').dropdown()
$(document).ready(function () {
$("[rel=tooltip]").tooltip();
});

// Tabs
$('#myTab a').click(function (e) {
e.preventDefault();
$(this).tab('show');
})



	