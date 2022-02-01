// Begin of shield function
function Escudo ()
{
    this.escudo = false;
    this.tamanho = canvas.height / 14.4; // original = 50
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.centro = this.tamanho / 2;
    this.raio = this.tamanho / 2;
    this.diferenca = canvas.height / 144; // original = 5
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'static/img/bola_azul_aqua.png';
    this.desenhar = function ()
    {
        // Drawing shield
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.tamanho, this.tamanho);
    };
    this.proximo = function ()
    {
        // Loading next frame
        this.posicaoY -= this.diferenca;
        if (this.posicaoY <= -this.tamanho)
        {
            // Resetting shield
            this.escudo = false;
        }
    };
}
// End of shield function