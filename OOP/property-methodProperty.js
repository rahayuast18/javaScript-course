/*
* Yang perlu diingat adalah, this merupakan representasi bahwasanya field yang ditunjuk adalah 
* field global dan dapat diakses dari method ataupun property di dalam kelas tersebut dengan 
* menambahkan this di depannya. 
*/

// cara 1
class Mail{
    from = 'pengirim@dicoding.com';
    contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this.contacts.push(to); // menyimpan kontak baru
    };
}

// cara 2
function Mail2() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this.contacts.push(to); // menyimpan kontak baru
    };
};

const theMail = new Mail();
theMail.sendMessage("Ini pesan yang aku tulis", "rahayu@gmail.com");

const deMail = new Mail2();
deMail.sendMessage("apakah ada pesan ini?", "coba@siapa.com")

//--------------------------------------------------
class Mail3{
    from = 'pengirim@dicoding.com';
    contacts = [];
    sendMessage = function(msg, to, from) {
        console.log('you send:', msg, 'to', to, 'from', from); 
        // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
        this.contacts.push(to);
    };
}
  
const mail1 = new Mail3();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
mail1.sendMessage('hallo', 'receiver@dicoding.com', 'aku@gmail.com');
// console.log(mail1.contacts)

//--------------------------------------------------
/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
var contacts = [];
// contoh
function Mail4(){
    this.from = 'pengirim@dicoding.com';
    var contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        contacts.push(to);
    };
}
 
 
/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
_contacts = []
// contoh
class Mail5{
    from = 'pengirim@dicoding.com';
    _contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    };
};
 
 
/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
//#contactss = [];  // perlu diaktifkan kalau menggunakan cara 3
// contoh
class Mail6{
    from = 'pengirim@dicoding.com';
    #contactss = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this.#contactss.push(to);
    };
};


//--------------------------------------------------
// Constructor
// cara 1
class Mail7{
    constructor(author) {
        this.from = 'pengirim@dicoding.com';
        console.log('is instantiated', author);
    };
}
   
// cara 2
function Mail8(author) {
    this.from = author;
    console.log('is instantiated', author);
}

const mail2 = new Mail7("emailku@dicoding.com");
console.log(mail2.from);
const mail3 = new Mail8(0877871233678);