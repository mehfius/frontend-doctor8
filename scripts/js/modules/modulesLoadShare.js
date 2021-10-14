function loadShare(element, array) {

  if (array.share !== undefined) {

    var share = cE("share");
    var icon = cE("icon");

        icon.setAttribute("class", "icon-share2");

    var div = cE("div");

        //share.appendChild(div);

    for (var s = 0; s < array.share.length; s++) {

      let div = cE("div");
div.setAttribute("style","background-color:"+array.categorycolors+"20;");
      var figure = cE("figure");

          div.appendChild(figure);

      var label = cE("label");

          label.appendChild(cT(array.share[s].label));

          div.appendChild(label);

          share.appendChild(div);

    }

    element.appendChild(share);

  }


}
