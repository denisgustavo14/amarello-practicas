var a = context.getVariable("request.queryparam.a");
var b = context.getVariable("request.queryparam.b");
var resultado = parseInt(a) + parseInt(b);
context.setVariable("request.queryparam.c",resultado);