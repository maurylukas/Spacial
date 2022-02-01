// Begin of life function
function Vida ()
{
    this.vida = false;
    this.largura = canvas.width / 21.333; // original = 60
    this.altura = canvas.height / 14.4; // original = 50
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.centroX = this.largura / 2;
    this.centroY = this.altura / 2;
    this.raio = this.altura / 2;
    this.diferenca = canvas.height / 144; // original = 5
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'static/img/gloss.png';
    this.desenhar = function ()
    {
        // Drawing life
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.largura, this.altura);
    };
    this.proximo = function ()
    {
        // Loading next frame
        this.posicaoY -= this.diferenca;
        if (this.posicaoY <= -this.altura)
        {
            // Resetting life
            this.vida = false;
        }
    };
}
// End of life function