$(document).ready(function(){
    $("header").hover(
        function(){
            $("#header-img").attr("src", "https://cdn.dribbble.com/users/99088/screenshots/3535098/5.gif");},
        function(){
            $("#header-img").attr("src", "https://previews.dropbox.com/p/thumb/AAJ3Cc8Z-KZywQjJhyASViuyZ2B6mn3llDKbuMJxM4Utqusf3sWhr2-Eq3eKygICNng_csim0C-JjioCmPc0NXjxtzgdabLR4970UyrToEBdQUzkWrZyAsUbLdhHH6R48iOO-9-bcT5DcMuTOGMdtfikQ54OdcZmZNTvEA6VWiAfVQ/p.png?size=1600x1200&size_mode=3");
        });
});

(function($) {
    $(function() {
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    });
})(jQuery); 