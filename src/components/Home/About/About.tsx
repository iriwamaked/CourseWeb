import  './About.css';


export function About(){
    return(
        <section className="bg-displaced-wrap">
        <div className="bg-displaced-body">
          <div className="container">
            <div className="inset-xl-left-70 inset-xl-right-70">
              <article className="box-cart bg-ebony-clay">
                <div className="box-cart-image"><img src="./img/about.jpg" alt=""/>
                </div>
                <div className="box-cart-body">
                  <blockquote className="blockquote-complex blockquote-complex-inverse">
                    <h3>Нам довіряють</h3>
                    <p>
                      <q>Довіра - це основа взаємовідносин між клієнтом та адвокатом, а для адвоката  єдиной формою капітала є його ділова репутація.</q>
                    </p>
                    <div className="quote-footer">
                      <cite>Ірина Македонська</cite>, <small>Керуючий партнер Адвокатського об'єднання "Македонські та партнери"</small>
                    </div>
                  </blockquote>
                  <div className="button-wrap inset-md-left-70"><a className="button button-responsive button-medium button-primary-outline-v2" href="#">Записатись на консультацію</a></div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="bg-displaced bg-image" style={{backgroundImage: 'url(img/back-femida.jpg)'}}></div>
      </section>
    );
}