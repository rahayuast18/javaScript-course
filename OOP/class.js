//--------------------------------------------------
// Function
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    };
};
 
const mail1 = new Mail();
mail1.sendMessage('Ini pesan', 'penerima@dicoding.com');

//--------------------------------------------------
// Class
class Mail2{
    from = 'pengirim@dicoding.com';
    sendMessage = function(msg, to) {
          console.log('you send:', msg, 'to', to, 'from', this.from);
    };
};
   
const mail2 = new Mail2();
mail2.sendMessage('This message', 'penerima@dicoding.com');