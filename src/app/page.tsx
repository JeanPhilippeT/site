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
          <p
          style={{
            color: "#b89a5a",
            fontSize: "1.6rem",
            fontStyle: "italic",
            lineHeight: "1.5",
            marginBottom: "10px",
          }}
       
          BIENTÔT NOTRE
          <br />
          NOUVEAU SITE EN LIGNE
        </h1>

        <p
          style={{
            letterSpacing: "2px",
            marginBottom: "40px",
            color: "#666",
          }}
        >
          POUR TOUTE DEMANDE
        </p>
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
