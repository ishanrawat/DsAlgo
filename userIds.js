// exports.userId1 = {data:
// ["4qjmgvjaxspjw4k","x9xamfgyyegkuhy","77003c5a9d2ce17c25fc7b998c5fde80","a7f5daca2a34cb7772532e024b815b80","qfr7wts6zublfhn","3cc16e4011baac9f7d28c003e41ce92d","fd9ef84814d69d7b607b743763f010b4","unlrbgpt0jps2y4","813adfcdfed34d3f417d7e7bd18f0653","b4232ba9394a581eb88797c81d81df4f","17h5dyaf04uw9kw","76arwmd2hbqmngv","r6s6gas560ypp5z","7518fxmf9k2td5o","73e8dbyc67dm6np","9yngcrv1hp38t8l","z6c0o8lhdoryucn","a0c47d829e3d0275f83885b69961e681","e44049757af4adb79268589776032f15","vz1evjyj0wk5rvx","5390566392be8bdc620a18f18150b491","kmgfbap7ah2x58n","41623y2qa26jpra","5cwopkwvkhixeaq","3erb9v6lyxbs68l","yvi6eptcdxyc6r2","7fc56fee433f109a063b8fb39edc1a84"]
// }
// exports.userId2 = {
//     data:["byoo9e25vxuz4eb","3cpgxs8v5cc65ua","3d363b50ec9c4dcf18a3e123e1606c27","n23fvltppazi6g3","pujdri44dhmqvjj","mzfwcwxp6nkhuhl","p9ee6efwjww3p8c","wgw0zmaalou0pjn","673398e4f6cfcba31557b13082ea2352","236b3aae04e35e41d46677422eb45eb6","0f7312e0de4e2c400669b1b8b3461076","qkly2nm8q67cuub","2ad6ed4ed3e38c56f1cf71f700d84bf9","d1d56e49ced7ee9b181f3afb64bb34db","1oklp3plnhy10qj","309f8ec51cb12687f077814df29c3ae4","jzj69nbeo6mjjyl","f21cfd09ea4dc7106ece43d445c73a47","vc8tgzy7b1vslcp","au65xnlsmc082k1","8d333785c128153fae600f90ad696261","bq31lbm6vhwuuyk","f86c419907c43642758c02a3336e2db7","3jrih12kz66pxsb","jn9arwpqbyu7vwp","1bec60cf6349db512b74a04bff11f7dd"]
// }
// exports.userId3 = {
//     data:["xg2l4c2xq464ly7","c12723e2f0af1c65f0debcb48a741111","mmfhy612w7h0ouo","zh6iv4q9any2lez","74sbtkn55c2wil4","cd61165874fb089e443a94a4b448e89b","ginphutuxsrw8sj","bf9mvn287k3corl","70h4rnpuj44xnnw","4zzr94pg8qw7s2y","07ddc89986b1aa7a682cd2fec7d11b37","wpyam1c56z310yj","4eddbe3c58bf8b20e5f4b7ff63640ee1","b92ed8f1a3ef73ce16bafbaa94257f3c","rpfph3b47xg90a9","8f522c485ebc0f1ba73807d9264fe38a","7gvk98cn55k7cuf","d25d50f7eebd4f4bf2a7821a608d37e5","znhiwxkdvkmws8j","4f96ac4a28408f1b0bbd98c03787ce5f","vmlovn2z95qfm8t","q3liks3czdxucgk","f3gl785beiezajm","r2212b1092pci1w","o1uwradk0wri3yb","d3e2e37d2e14e4e76ecbcacf9283a530","gqw3k1rncdb3rnn","fskep72qmjl1fof","45252af1646a420cc34ced72bd9d47ee","sgpf2y6fdr8o82g","3xkscqghhk3o0fo","az3drp54b5an7ek","eopaik7bvs683j2","9669d38a1d9fcb97f5560deca1b695d8","xpe5ntv6zxz0quq","4mezmhaeq5lv1sm","akkch6p9zhqtrio","7b5448437aa20f743c4c049c6de1c346","00z29o07tyn2qkk","zrf8kt1g5r75mp7","889e7f5292360821541f21ff0c6ae2f6","99707cbe028e9c57740f25c61fc716f9","wqeravlsp5tpbzm","d869c5893ea8c991ea645de33884a86f","f5e96e8e3d689ef87834150eb475eb54","c0sufwl9zwkap5g","985049e4b7d65c4bfa4b1a80c0caadb1","098bc5323f9ba35511aef3e141828dcd"]
// }
const { findOne, updateOne, insertOne } = require('@hdworks/dynamo-db-wrapper')
const fetchData = async() =>{
    let userId = await findOne('users', { _id: "r2u38zqw4yvz4y3" }, { _id: 1, googleId: 1, appleId: 1, facebookId: 1 })
    console.log(userId)
}

fetchData()