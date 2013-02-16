$(document).ready(
		function() {
		$.mobile.loading('show');
		$.mobile.loading('hide');
		$('#taskBox').focus();
		var x = '0';
	
			$('#collapsible').collapsible();
			
			
						
			$("#addBtn").click(function() {
						$.mobile.loading('show');
							if ($('#taskBox').val() == ('')
									|| ($('#addDesc').val() === (''))) {
								alert('Fields can not be blank!. ');
								$.mobile.loading('hide');
							} else
								{

								var fullDate = new Date();
								var twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)  twoDigitMonth="0" +twoDigitMonth;
								var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1) twoDigitDate="0" +twoDigitDate;
								var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
								var fullDate = new Date();
								var twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)  twoDigitMonth="0" +twoDigitMonth;
								var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1) twoDigitDate="0" +twoDigitDate;
								var currentDate = twoDigitMonth + "/" +twoDigitDate   +  "/" + fullDate.getFullYear();
								//$('collapsible-set div').append('<h3 id="task">' + ($('#taskBox').val()) + '</h3>').trigger('create');
								//$('collapsible').append('<div id="collapsible" data-role="collapsible" data-collapsed="true">' + ($('#addDesc').val()) + '</div>').trigger('create');
								
								// $('#collapsible').append(
										// '<h3 id=' + x +'>'+ '<p>'+'Date Created: ' + currentDate + ' <br>  ' + 'Task Name:'+ '   '+ 
												// ($('#taskBox').val()) + '</p></h3>'
												// + '<div id ='+(x+1)+'>' + '<p><b>' + 'Task Description:  '+'</b>' + '<br>'
												// + ($('#addDesc').val())
												// + '</p> </div>').trigger('create');
												// x=x+2;
												 												
								$('<div data-role="collapsible" ><h3 class="holder"  id="h3_' + x+'">' + "Date Created:  " + '<br>' + currentDate + 
									"<br>" + ($("#taskBox").val()) + '</h3><p class="para" id="para_' + x+'" >' + '<input name="checker" value='+ x+' class="check" type="checkbox" id="chk_' + x+'">'+
										($('#addDesc').val()) +'</p></div>').appendTo('[data-role="content"]');
											$('div[data-role=collapsible]').collapsible({theme:'c',refresh:true});
												x++;
												
								$('#addDesc').val("");
								$('#taskBox').val("");
								$('#taskBox').focus();
								$.mobile.loading('hide');
								 
												
							}

						});
			$('#clearBtn').click(function() {
					 $.mobile.loading('show');
					$('input[type=checkbox]').each(function () {					 
					 if($('#checker').val()).is(':checked'){
					 $('.div').find('h3_'+ x).remove('.div');
					 
					
					 // $('#para').hide();
					 // $('#h3').hide();
					// document.getElementsByAttribute('#para').val();
							 //document.getElementById(this);
							 //document.body.removeChild($('#para_0'));
							 //document.body.hasChildNodes($(this).val());
									alert(this);
							//var head =document.getElementById('h3_' + $('.check').val()));
								//var c =document.getElementById('h3_' + $('.check').val()));
										
								// $('.holder').parent().remove();
								// $('.para').parent().remove();
								$.mobile.loading('hide');
								$('div[data-role=collapsible]').collapsible({theme:'c',refresh:true});
								
							alert(" You have successfully deleted"+" "+ x +" " + "Tasks ");
							
						}
						
						
							else {
								
							alert ("Please Select Tasks to Remove!");
							$.mobile.loading('hide');
						}
							
				
				
				});	
				
			});
			
			
			
			
				$('#collapsible').dblclick (function(){
											
				});
								
		});