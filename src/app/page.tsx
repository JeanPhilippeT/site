export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh", 
        background: "#f4ece6",
        display: "flex", 
        alignItems: "center",
        justifyContent:"center",
        padding:"40px 20px 20px",     
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
        }}
      >
     <img
      src="/logo-griffe-complet.png"     
       alt="Jean-Philippe Tourigny"
       style={{
      width:"650px",
      maxWidth:"90%",
      height:"auto",
      margin:"0 auto 40px auto",
      display:"block"
      }}
    />
      <h1
  style={{
    fontSize: "1.15rem",
    letterSpacing: "3px",
    fontWeight: 300,
    marginTop: "10px",
    marginBottom: "25px",
    whiteSpace: "nowrap",
  }}
>
  BIENTÔT NOTRE NOUVEAU SITE EN LIGNE
</h1>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "35px",
    marginBottom: "50px",
    fontSize: "1.4rem",
  }}
>
<a
  href="https://wa.me/212617682235"
  target="_blank"
  rel="noopener noreferrer"
 style={{
  color:"#000",
  textDecoration:"underline",
  textUnderlineOffset:"4px",
  cursor:"pointer"
}}
>
  WhatsApp
</a>
 
  <a
  href="https://instagram.com/jeanphiliptourigny"
  target="_blank"
  rel="noopener noreferrer"
  style={{
  color:"#000",
  textDecoration:"underline",
  textUnderlineOffset:"4px",
  cursor:"pointer"
  }}
>
  Instagram
</a>

</div>

      </div>       
    </main>
  );
}
