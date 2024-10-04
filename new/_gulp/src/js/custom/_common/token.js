function read_token() {
    try {
        // Define vars
        var price_found = false;

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

                    // Check if
                    if (price) {
                        // Vars
                        var price_change = check_value_defined(pair.priceChange.h24);
                        var price_string = format_value_percent(price, price_change);

                        // Check if
                        if (price_string) {
                            // Append
                            $("[data-token=price]").html(price_string);

                            // Vars
                            price_found = true;

                            // Title
                            document.title = "$PONCHO: " + price + " (" + price_change + "%) | Poncho on BASE";
                        }
                    }
                } else {

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // console.error(errorThrown);
            }
        }).always(() => {
            // nprogress_end();
            // Check if
            if (!price_found) {
                console.log("not found");
            }
        });
    } catch (e) {
        // console.error(e);
    }
}

function read_token_interval() {
    try {
        // Set interval - 5 mins
        setInterval(function () {
            // Read token
            read_token();
        }, 5 * 60 * 1000);
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
//             // console.error(errorThrown);
//         }
//     }).always(() => {
//         // nprogress_end();
//     });
// }