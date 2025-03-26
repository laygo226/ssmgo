$(function() {
	
	// 表头第一个复选点击全选表内其他所有，再次点击反选
	$("table :checkbox:first").change(
			function() {
				$(this).closest("table").find(":checkbox:not(:first)").prop(
						"checked", this.checked);
			});

	
	
	
	
	function ajax() {
		var url = '/ssmpro/selectByPage.action';
		$
				.ajax( {
					url : url,
					type : "POST",
					data : {
						id : $('#id').val(),
						name : $('#name').val(),
						phone : $('#phone').val(),
						department : $("input[name='department']:checked")
								.val(),
						district : $('#district').val(),
						address : $('#address').val(),
						per1 : $('#per1').val(),
						per2 : $('#per2').val(),
						currentPage : $('#currentPage').html()
					},
					success : function(data) {

						// 添加前先清空表格数据
					$('#checkTable tr:gt(0)').remove();// tr大于第一行的都删除

					var str = '';
					for ( var i = 0; i < data.length; i++) {
						str += "<tr>";
						str += "<td><input type=\"checkbox\" name=\"checkbox\" value="
								+ data[i].id + "></td>";
						str += "<td id=id" + (i + 1) + ">" + data[i].id
								+ "</td>";
						str += "<td>" + data[i].name + "</td>";
						str += "<td>" + data[i].phone + "</td>";
						str += "<td>" + data[i].department + "</td>";
						str += "<td>" + data[i].district + "</td>";
						str += "<td>" + data[i].address + "</td>";
						str += "<td>" + data[i].per + "</td>";
						str += "<td><button onclick=\"location.href='/ssmpro/jsp/updateSeller.jsp?id="
								+ data[i].id
								+ "+"
								+ "&name="
								+ data[i].name
								+ "&phone="
								+ data[i].phone
								+ "&department="
								+ data[i].department
								+ " "
								+ "&district="
								+ data[i].district
								+ "&address="
								+ data[i].address
								+ "&per="
								+ data[i].per
								+"&currentPage="+
								$('#currentPage').html()
								+ "'\">更新资料</button></td>"
						str += "</tr>";
					}

					// 向表格追加数据
					$('#checkTable').append(str);

				},
				error : function() {
					alert('访问失败')
				}
				})

	}

	function getMaxPage() {
		var url = '/ssmpro/getMaxPage.action';
		$.ajax( {

			url : url,
			type : "get",
			data : {
				id : $('#id').val(),
				name : $('#name').val(),
				phone : $('#phone').val(),
				department : $("input[name='department']:checked").val(),
				district : $('#district').val(),
				address : $('#address').val(),
				per1 : $('#per1').val(),
				per2 : $('#per2').val(),
				currentPage : $('#currentPage').html()
			},
			// 获取最大页数
			success : function(data) {
				$('#maxPage').html(data);
				if (data == 0) {
					$('#currentPage').html(0);
				}
				
				if(parseInt($('#currentPage').html())>parseInt($('#maxPage').html())){
					$('#currentPage').html($('#maxPage').html())
				}
			},
			error : function() {
				alert('访问失败')
			}

		})
	}
	
	
	
	
	
	$("#delete").click(function() {
// 1. 创建数组
		 var array= new Array();
		$('input:checkbox').each(function() {
			if ($(this).prop('checked') == true) {
// 2. 往数组添加数据：
				array.push($(this).val());
			}	
		});
		if(!confirm(array)){
			return;
		}
		// 将数组储存到字符串形式
		var str = "";
		for ( var i = 0; i < array.length; i++) {
			if(i==array.length-1){
				str+=array[i];
			}else{
			str+=array[i] + ",";
			}
		}
	
		
		var url = '/ssmpro/delete.action';
		$.ajax( {
			url : url,
			type : "POST",
			data : {
				str : str,
			},
			success : function(data) {
				alert('删除成功')
				
				getMaxPage();
				ajax();
				
			},
			error : function() {
				alert('访问失败')
			}
		})
		
		
		
		
		
	});

})
