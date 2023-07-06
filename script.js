let a = +prompt("Son kiriting. Biz sizga uni juft yoki toqligini topib beramiz")
while (isNaN(a)) {
  a = +prompt("Iltimos son kiriting")
}
if (a % 2 == 0) {
  alert("Siz juft son kiritdinggiz")
} else {
  alert("Siz toq son kiritdinggiz")
}