module.exports = function (router){
    //renders homepage
    router.get("/", function (req, res) {
        res.render("home")
      });
      //renders saved handlbars
      router.get("/saved", function (req, res) {
        res.render("saved")
      });
}