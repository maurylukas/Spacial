// Begin of final boss function
function Chefe ()
{
    this.chefe = false;
    this.final = false;
    this.tamanho = canvas.height / 1.0827; // original = 665
    this.posicaoX = nave.posicao + (nave.largura - this.tamanho) / 2;
    this.posicaoY = canvas.height;
    this.diferenca = canvas.height / 36; // original = 20
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {

    };
    this.imagem.src = 'static/img/ship.png';
    this.acabar = function ()
    {
        // Loading final boss
        this.chefe = true;
        this.posicaoX = nave.posicao + (nave.largura - this.tamanho) / 2;
        if (this.posicaoX < 0)
        {
            this.posicaoX = 0;
        }
        if ((this.posicaoX + this.tamanho) > canvas.width)
        {
            this.posicaoX = canvas.width - this.tamanho;
        }
        this.posicaoY = canvas.height;
    };
    this.desenhar = function ()
    {
        // Drawing final boss
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.tamanho, this.tamanho);
    };
    this.proximo = function ()
    {
        // Loading next frame
        this.posicaoY -= this.diferenca;
        // Stopping game loop
        if (this.posicaoY <= 0)
        {
            this.chefe = false;
            this.final = true;
        }
    };
    this.reinicio = function ()
    {
        // Resetting final boss
        this.final = false;
        this.posicaoY = canvas.height;
    };
}
// End of final boss function