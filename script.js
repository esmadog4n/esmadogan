document.getElementById("aramaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Sayfa yenilenmesin
  
    const arama = document.getElementById("aramaKutusu").value.toLowerCase();
  
    // Anahtar kelimelere göre yönlendirme listesi
    const yönlendirmeListesi = {
      "glütensiz": ["pkekgz.html"],
      "kek": ["tarifaramaliste.html"], // Artık tüm kek tariflerini bu sayfada listeleyeceğiz
      "kahvaltılık": ["kaygana.html"]
      "kaygana": ["kaygana.html"]
    };
  
    let bulunanSayfalar = [];
  
    for (const anahtarKelime in yönlendirmeListesi) {
      if (arama.includes(anahtarKelime)) {
        bulunanSayfalar = [...bulunanSayfalar, ...yönlendirmeListesi[anahtarKelime]];
      }
    }
  
    const benzersizSayfalar = [...new Set(bulunanSayfalar)];
  
    if (benzersizSayfalar.length === 1) {
      window.location.href = benzersizSayfalar[0];
    } else if (benzersizSayfalar.length > 1) {
      // Burada yönlendirme yapılacak sayfaya gidiyoruz
      window.location.href = "tarifler.html";  // Bu sayfa tüm kek tariflerini listeleyecek
    } else {
      alert("Aradığınız tarif bulunamadı.");
    }
  });
  
