$(function(){


  /*-------------------------------
  ハンバーガーメニュー
  ---------------------------------*/
  /* ハンバーガーメニューをクリックしたときの処理 */
  $(".hamburger-menu").click(function () {
    /* activeクラスの追加・削除 */
    $(this).toggleClass("active");
    $("#header .navi").toggleClass("active");
    $("#header .mask").toggleClass("active");
  });
  /* メニュー内のリンクをクリックしたときの処理 */
  $(".navi a").click(function () {
    /* activeクラスを閉じる */
    $(".hamburger-menu").removeClass("active");
    $("#header .navi").removeClass("active");
    $("#header .mask").removeClass("active");
  });
  /* マスク領域をクリックしたときの処理 */
  $(".mask").click(function () {
    /* activeクラスを閉じる */
    $(".hamburger-menu").removeClass("active");
    $("#header .navi").removeClass("active");
    $("#header .mask").removeClass("active");
  });
  
  /*-------------------------------
  ドロップダウンメニュー
  ---------------------------------*/
  /* 「会社情報」をクリックしたときの処理 */
  $(".navi .menu .menu-first span").click(function () {
    /* this = 「会社情報」next = ドロップダウンの要素 */
    $(this).toggleClass("active");
    /* ドロップダウン要素をスライドで表示 */
    $(this).next().slideToggle();
  });
  /* ドロップダウン要素をクリックしたときの処理 */
  $(".navi .menu .menu-second").click(function () {
    /* ドロップダウンを閉じる */
    $(this).prev().toggleClass("active");
    $(this).slideToggle();
  });
  
  /*-------------------------------
  Inviewクラス
  ---------------------------------*/
  /* fadeinクラスの要素が画面上に来たタイミング */
  $(".fadein").on("inview", function () {
    /* inviewクラスを追加 */
    $(this).addClass("inview");
  });
  
  /*-------------------------------
  タブ切り替え
  ---------------------------------*/
  /* 初期表示時は「全て」を選択 */
  $(".tab-list .tab-all").addClass("active");  
  $(".products-list.all").addClass("active");

  /* クリックされたとき */
  $(".tab-all").click(function () {
    /* 全てのタブとサービス一覧の選択と表示を解除する */
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    /* クリックされたタブにactiveクラスを追加する */
    $(this).addClass("active");
    $(".products-list.all").addClass("active");
  });
  
  $(".tab-space").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.space").addClass("active");
  });
  
  $(".tab-aroma").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.aroma").addClass("active");
  });
  
  $(".tab-sound").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.sound").addClass("active");
  });
  
  $(".tab-touch").click(function () {
    $(".tab-list li").removeClass("active");
    $(".products-list").removeClass("active");
    $(this).addClass("active");
    $(".products-list.touch").addClass("active");
  });
  
  /*-------------------------------
  モーダルウィンドウ
  ---------------------------------*/
  // １番目のボタンがクリックされたとき
  $(".work1 .modal-open").click(function () {
    /* モーダルウィンドウの裏側のスクロールを無効にする */
    $("body").css("overflow-y", "hidden");
    /* actuveクラスを追加して モーダルウィンドウを表示 */
    $(".work1 .modal-container").addClass("active");
  });
  
  $(".work2 .modal-open").click(function () {
    $("body").css("overflow-y", "hidden");
    $(".work2 .modal-container").addClass("active");
  });
  
  $(".work3 .modal-open").click(function () {
    $("body").css("overflow-y", "hidden");
    $(".work3 .modal-container").addClass("active");
  });

  // 閉じるボタンがクリックされたとき
  $(".modal-close").click(function () {
    /* モーダルウィンドウの裏側のスクロールを有効にする */
    $("body").css("overflow-y", "auto");
    /* actuveクラスを削除して モーダルウィンドウを非表示 */
    $(".modal-container").removeClass("active");
  });

  /*-------------------------------
  アコーディオン
  ---------------------------------*/
  // 回答を非表示にする
  $(".faq-list dd").hide();
  // 質問をクリックされたとき
  $(".faq-list dt").click(function () {
    // 要素の隣の要素にactiveクラスの表示・非表示をスライドで行う 
    const answer = $(this).next();
    answer.slideToggle();
    $(this).toggleClass("active");
    
    // キラキラ演出を一瞬だけ付ける
    answer.addClass("sparkle");
    setTimeout(() => {
      answer.removeClass("sparkle");
    }, 600); // アニメーション時間と合わせる
  });
  /*-------------------------------
  プロジェクトのイメージ画像をランダムに表示させる
  ---------------------------------*/  
  document.querySelectorAll('.project .project-list li').forEach(li => {
    if (window.innerWidth > 767) {
      const rotate = Math.floor(Math.random() * 10 - 5); // -5?5度
      const scale = 0.9 + Math.random() * 0.3; // 0.9?1.2倍
      const x = Math.floor(Math.random() * 30 - 15); // -15?15px
      const y = Math.floor(Math.random() * 30 - 15); // -15?15px
      li.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`;
      li.style.zIndex = Math.floor(Math.random() * 10);
    }
  });
  
  /*-------------------------------
  ページ内リンクのボタンのアニメーション
  ---------------------------------*/  
  document.querySelectorAll('.pagelink-list li').forEach(item => {
    item.addEventListener('mouseenter', e => {
      for (let i = 0; i < 6; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${e.target.offsetLeft + Math.random() * item.offsetWidth}px`;
        star.style.top = `${e.target.offsetTop + 20 + Math.random() * 10}px`;
        document.body.appendChild(star);

        setTimeout(() => {
          star.remove();
        }, 1000);
      }
    });
  });
  
  /*-------------------------------
  マップの横のボタンが押されたときの処理
  ---------------------------------*/  
  
  const infoTexts = {
    pin1: "InnerVerseの建物は金森レンガ倉庫から徒歩５分程の海の近くにあります。",
    pin2: "道に迷ったときは、「0138-27-XXXX」にご連絡ください。",
    pin3: "この看板を目印にお越しください！"
  };

  document.querySelectorAll('#access .card').forEach(card => {
    card.addEventListener('click', () => {
      const pinId = card.dataset.pin;
      const infoBox = document.getElementById("infoBox");
      const infoText = infoTexts[pinId];

      if (infoText) {
        infoBox.querySelector("p").textContent = infoText;
        infoBox.style.display = "block";
        infoBox.style.opacity = 1;
        const p = infoBox.querySelector("p");
        
         // タイピング風アニメーション
        typeText(p, infoText, 120); // 速度を調整

        // pin3のときは看板を出す
        if ( pinId == "pin3" ){
            signBoard.style.display = "block";
        }
      } else {
        infoBox.style.display = "none"; // 該当しない場合は非表示
      }
    });
  });
  
  /*-------------------------------
  メッセージボードの <p> 要素に文字を一文字ずつ表示する関数
  ---------------------------------*/  
  
  
  function typeText(element, text, speed = 50) {
    element.textContent = "";
    let i = 0;
    const chalkSound = document.getElementById("chalkSound");

    chalkSound.currentTime = 0;
    chalkSound.loop = true;
    chalkSound.play();

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        chalkSound.loop = false;
        chalkSound.pause();
        chalkSound.currentTime = 0;
        
        // 書き終わったら0.5秒待ってからチョークを置く音を鳴らす
        setTimeout(() => {
          chalkEndSound.currentTime = 0;
          chalkEndSound.play();
        }, 500); // 待ち時間を調整
      }
    }

    type();
  }
});  
