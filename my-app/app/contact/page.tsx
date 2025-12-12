export default function ContactPage() {
  return (
    <>
      <h2 className="page-title">Контакты</h2>
      <p style={{maxWidth:720, margin:"0 auto 6px"}}>Напиши нам или приходи в гости.</p>

      <section style={{maxWidth:640, margin:"0 auto", textAlign:"left"}}>
        <div className="card" style={{padding:18}}>
          <h3>Адрес</h3>
          <p>ул. Ароматная, 5</p>

          <h3 style={{marginTop:12}}>Телефон</h3>
          <p>+7 777 777 77 77</p>

          <h3 style={{marginTop:12}}>Режим работы</h3>
          <p>08:00 — 22:00</p>

          <div style={{marginTop:14}}>
            <a className="btn" href="tel:+77777777777">Позвонить</a>
            <a className="btn" style={{marginLeft:10}} href="mailto:info@drinkit.example">Написать</a>
          </div>
        </div>
      </section>
    </>
  );
}  