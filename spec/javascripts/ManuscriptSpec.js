describe("Manuscript", function() {

  describe ("class methods", function() {
      it("#bboxToStyle", function() {
          result = Manuscript.bboxToStyle("bbox 197 272 249 281");
          expect(result).toEqual("left:197px; top:272px; width:52px; height:9px; ");

      });

  });
});
