// Você recebe um array (lista) de strings e um número inteiro k. Sua tarefa é retornar
// a primeira string mais longa que consiste em k strings consecutivas obtidas na matriz.

// Exemplos:
// strarr = ["árvore", "foling", "inútil", "azul", "abcdef", "uvwxyz"], k = 2

// Concatenando as strings consecutivas de strarr por 2, obtemos:

// treefoling (comprimento 10) concatenação de strarr[0] e strarr[1]
// folingtrashy (" 12) concatenação de strarr[1] e strarr[2]
// trashyblue (" 10) concatenação de strarr[2] e strarr[3]
// blueabcdef (" 10) concatenação de strarr[3] e strarr[4]
// abcdefuvwxyz (" 12) concatenação de strarr[4] e strarr[5]

// Duas strings são as mais longas: "folingtrashy" e "abcdefuvwxyz".
// O primeiro que veio é "folingtrashy" então
// mais longo_consec(strarr, 2) deve retornar "folingtrashy".

// Da mesma forma:
// mais longa_consec(["zona", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) -->
// "abigailtheta"
// // sendo n o comprimento da matriz de strings, se n = 0 ou k > n ou k <= 0 retorne
// "" (retorne Nothing em Elm, "nothing" em Erlang).

// Observação
// strings consecutivas: seguem uma após a outra sem interrupção

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) {
    return "";
  }
  let maior = 0
  const result = strarr.map((str, i, array) =>  array.slice(i, i + k).join(""))
  for (let i = 0; i < result.length; i++) {
    if (result[i].length > result[maior].length) {
        maior = i
    }
  }
  
  return [strarr.indexOf("lrkwydtkklb"), strarr.length, strarr.length - 72 ]
}
 
console.log(
  longestConsec([
    "muntttkdycvnzy",
    "wayfctsu",
    "dtwyaxkdjxep",
    "iglryiyjzz",
    "uovmbyjhvyohc",
    "rjwlkz",
    "fzwypbluy",
    "kesrtgpiw",
    "rlzhhiuxfk",
    "ymominnale",
    "ryetelmwlqzfl",
    "njdjlaqtv",
    "vfrvlltb",
    "hmnldwzchd",
    "riebpeenzk",
    "teibdqupqlud",
    "okcjzhwrx",
    "lndzledptgof",
    "mvbcrzwknz",
    "futuadfmh",
    "rvqqxykvieayq",
    "mlrcpx",
    "nvxxxuiyvei",
    "hibsezoud",
    "xdeegwyip",
    "olfllhtem",
    "numlmzjsfef",
    "kkhrrblv",
    "xytfokawu",
    "xavmnfrlkbrqbkcm",
    "xsnvdpqoonj",
    "lyjykzwuukts",
    "tudbgrcgypnk",
    "nsmovbbrnx",
    "kgmtvpbequ",
    "twvjczqnlea",
    "axyguquecbfs",
    "fduwtoujxjbkb",
    "vmmjiyyvcxfe",
    "pdcywri",
    "etcdkbyyulf",
    "puugwfxmc",
    "rsokjvbx",
    "voixxlwr",
    "ipktbeuiq",
    "ouyiibdvjkg",
    "gfvmdbyvicb",
    "mqapvbrmr",
    "aixwvozn",
    "pbkifmrqq",
    "nizijggyfj",
    "bkubtng",
    "jjzdnkjzfs",
    "xtmwljbusiub",
    "ndjkifrkp",
    "vldniywbytln",
    "vbiclwyeu",
    "yhdqiar",
    "mvozobgqsuyie",
    "tydqap",
    "nucpxenb",
    "ewdtyoi",
    "dnzhqerty",
    "gdeulepvindfynu",
    "udbfiqjfzql",
    "prvpkjdrkhz",
    "ohergdxwsgeluczpp",
    "byieuueyh",
    "wbafedbpx",
    "epuoanssakdmg",
    "fncfdyjmx",
    "mjrfkwrzz",
    "lrkwydtkklb",
    "vtleqdkdhq",
    "qqoqcvweljwf",
    "rbjghtmfusg",
    "vwxlptaekdpyvg",
    "kszmshknpwioc",
    "gniqiovgg",
    "uphrnkisnzql",
    "gfhcrrssybbjn",
    "bdszelbzcoh",
    "uugsgugc",
    "liearqb",
    "acqomfsqi",
    "arwmbnynrqdwfl",
    "qcnhxj",
    "mjyxoqh",
    "ihmzrgvot",
    "aljmyplk",
    "vgvtzcnh",
    "huhohce",
    "qnllhuvr",
    "imhkewoxpm",
    "kuswbqflpxtye",
    "mpiwjdamhmhfn",
    "znnydvfre",
    "qkwgjjna",
    "geapujc",
    "rnwzczyyuoowa",
    "njtgicwqsgsv",
    "cpypfcwtl",
    "prbswyxsjgrqrt",
    "rmohgxxujyx",
    "chzohnrxtyte",
    "rtxjjlbctfjl",
    "kbrzanq",
    "oxuiscpadv",
    "ybfafiiaa",
    "bnjfukwbbezikmp",
    "haynoxxklthk",
    "fhrlstgrezsrqm",
    "flpaolcoujocj",
    "vdnlspsltkpo",
    "hdamjahryq",
    "gqqjvlvn",
    "yrvsczoikeejp",
    "fgkbxyipwtnzv",
    "ighrsgqnrk",
    "ubybrromtktvzgvm",
    "zbwzpnzndhvmawt",
    "utrkhxpwdr",
    "lxgriwszao",
    "qvtpovndhyuzl",
    "kikldha",
    "uhphav",
    "afkfplnksp",
    "pcgnvyhhq",
    "fzkygdeqxbsar",
    "wnwhywcqqkll",
    "geiawxkdob",
    "hekkqjbiv",
    "efbyrtxwsp",
    "osacswroxcjxsm",
    "lwkqqvntqw",
    "xokpjiqtv",
    "ziqxtlcubkptyggl",
    "jfvuhmefi",
    "dbsuxphc",
    "oqgvmyxli",
    "jwtriqwjgc",
    "dxsmly",
    "molnrvula",
    "xuuretchiqpjvl",
    "wicbliwfxiwantz",
    "lzlexbmsleeoksa",
    "tdkjjgdvfh",
    "tvegihclajzd",
    "phujvatjlg",
    "aegqbzsmvp",
  ], 65)
);
