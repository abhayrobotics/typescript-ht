// array 
var user = [1, "ab"];
// tuples, here the order and length also matters 
var tUser;
tUser = ["ab", 1212, false,];
// not allowed
// tUser = ["ab",false, 1212]
// tUser = ["ab", 1212,false,"ab", 1212,false,]
// !but tuples are not perfect , they have issues   which should not be allowed.
tUser.push("Helo");
