var mobile_menu = document.querySelector('.mobile-menu');
var menu_pressed = false;
var price_items = document.querySelectorAll('.price-item');
document.querySelector('#menu-icon').addEventListener('click', function(){
	if(!menu_pressed){
		mobile_menu.style.transform = 'translateY(0%)';
		menu_pressed = true;
	}else{
		mobile_menu.style.transform = 'translateY(-100%)';
		menu_pressed = false;
	}
});

// DRAG AND DROP
var draggable_task = document.querySelector('#draggable-task');
var drop_here = document.querySelector('.drop-here');
var in_progres_number = document.querySelector('#in-progres-number');
var completed_number = document.querySelector('#completed-number');
var draggable_condition = document.querySelector('#draggable-condition');


// DRAGGING 

draggable_task.addEventListener('dragstart', dragStart);
draggable_task.addEventListener('dragend', dragEnd);

function dragStart(){
	console.log('start');
	setTimeout(() => (draggable_task.style.display = 'none'), 0);
}
function dragEnd(){
	console.log('end');
	draggable_task.style.display = 'flex';
}

drop_here.addEventListener('dragover', function(e){
	e.preventDefault();
	drop_here.style.borderColor = '#c15b01';
	drop_here.style.color = '#c15b01';
});
drop_here.addEventListener('dragleave', function(){
	drop_here.style.borderColor = '#8492af';
	drop_here.style.color = '#8492af';
});
drop_here.addEventListener('drop', function(){
	console.log('drop');
	this.innerHTML = '';
	this.style.color = 'unset';
	this.style.display = 'block';
	this.style.border = 'none';
	this.appendChild(draggable_task);
	draggable_condition.innerHTML = '<i class="far fa-check-circle"></i> Completed!';
	draggable_condition.style.color = '#00bf1b';
	draggable_task.setAttribute('draggable', false);
	in_progres_number.innerHTML = '(2)';
	completed_number.innerHTML = '(3)';
});

const login_btn = document.querySelector('.login-btn');
const get_started_btn = document.querySelector('.get-started-btn');
const join_now_btn = document.querySelector('.join-now-btn');

const btns = [login_btn, get_started_btn, join_now_btn];

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		document.querySelector('.modal').style.display = 'block';
	})
})
document.querySelector('.login-modal form .button').addEventListener('click', () => {
	document.querySelector('.modal').style.display = 'none';
})