function read_token() {
    try {
        // Read token
        $.ajax({
            type: "GET",
            cache: false,
            url: "https://api.dexscreener.com/latest/dex/pairs/base/0x6FD34677ecDFae4caE732A5B22F1A3082917eb15",
            success: function (response, status, xhr) {
                // Vars
                response = check_value_defined(response);
                var pair = check_value_defined(response.pair);

                // Check if
                if (pair) {
                    // Vars
                    var price = check_value_defined(pair.priceUsd);
                    var price_change = check_value_defined(pair.priceChange.h24);


                    $("[data-token=price]").append('<span class="font--bold font--green"><i class="fas fa-long-arrow-alt-up"></i> ' + price + ' (' + price_change + '%)</span>')
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // console.error("error");
            }
        }).always(() => {
            // nprogress_end();
        });
    } catch (e) {
        // console.error(e);
    }
}

// function read_token() {
//     // Read token
//     $.ajax({
//         type: "GET",
//         cache: false,
//         url: "https://api.dexscreener.com/latest/dex/tokens/0xc2fe011c3885277c7f0e7ffd45ff90cadc8ecd12",
//         success: function (response, status, xhr) {
//             console.log(response);
//         },
//         error: function (XMLHttpRequest, textStatus, errorThrown) {
//             // console.error("error");
//         }
//     }).always(() => {
//         // nprogress_end();
//     });
// }