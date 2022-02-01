// Begin of shot function
function Tiro ()
{
    this.tiro = false;
    this.largura = canvas.width / 91.42857; // original = 14
    this.altura = canvas.height / 37.89473; // original = 19
    this.posicaoX = nave.posicao + (nave.largura - this.largura) / 2;
    this.posicaoY = nave.altura;
    this.centroX = this.largura / 2;
    this.centroY = this.altura / 2;
    this.raio = this.largura / 2;
    this.diferenca = canvas.height / 144; // original = 5
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'static/img/tiro2.png';
    this.atirar = function ()
    {
        // Loading shot
        this.tiro = true;
        this.posicaoX = nave.posicao + (nave.largura - this.largura) / 2;
        this.posicaoY = nave.altura;
    };
    this.desenhar = function ()
    {
        // Drawing shot
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.largura, this.altura);
    };
    this.proximo = function ()
    {
        // Loading next frame
        this.posicaoY += this.diferenca;
        if (this.posicaoY >= canvas.height)
        {
            // Resetting shot
            this.tiro = false;
        }
    };
}
// End of shot function