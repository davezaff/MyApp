$(document).ready(
		function() {
				
		$('#taskBox').focus();
		var x = '0';
		var y = '0';	
		var z = '0';
			$('#collapsible').collapsible();
			
			
						
			$("#addBtn").click(function() {
						
							if ($('#taskBox').val() == ('')
									|| ($('#addDesc').val() === (''))) {
								alert('Fields can not be blank!. ');
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
												 												
								$('<div data-role="collapsible" ><h3 class="holder"  id=' + x +  '>' + "Date Created:  " + '<br>' + currentDate + 
									"<br>" + ($("#taskBox").val()) + '</h3><p class="para">' + '<input name="checker['+ y +']"+ value='+ y +' class="check" type="checkbox" id=' + z +  '>'+
										($('#addDesc').val()) +'</p></div>').appendTo('[data-role="content"]');
											$('div[data-role=collapsible]').collapsible({theme:'c',refresh:true});
												x++;
												y++;
												z++;
								$('#addDesc').val("");
								$('#taskBox').val("");
								$('#taskBox').focus();
								 
												
							}

						});
			$('#clearBtn').click(function() {
					 $.mobile.loading('show');		
					 if($('.check').is(':checked')){
								$('.holder').parent().remove();
								$('.para').parent().remove();
								$.mobile.loading('hide');
								$('div[data-role=collapsible]').collapsible({theme:'c',refresh:true});
								
							alert(" You have successfully deleted"+" "+ x +" " + "Tasks ");
							
						}
						
						
							else {
								
							alert ("Please Select Tasks to Remove!");
						}
							
				
				
					
				
			});
			
			
			
			
				$('#collapsible').dblclick (function(){
											
				});
								
		});