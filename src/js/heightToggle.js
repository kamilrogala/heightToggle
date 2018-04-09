/*jshint esversion:6,browser:true,devel: true*/
document.addEventListener('DOMContentLoaded', function () {
	let elements = document.querySelectorAll('.resized');
	elements.forEach(function (item) {
		let childrenHeight, itemStyle, startHeight;
		childrenHeight = item.childNodes[1].scrollHeight;
		itemStyle = getComputedStyle(item);
		startHeight = Number(itemStyle.height.replace('px', ''));
		item.addEventListener('click', function () {
			if (itemStyle.height.replace('px', '') <= startHeight) {
				item.style.height = childrenHeight + 'px';
				item.children[0].style.height = childrenHeight + 'px';
			} else {
				item.style.height = startHeight + 'px';
				item.children[0].style.height = startHeight + 'px';
			}
		}, false);
	});
});
