// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

window.onload = function() {
    // Get away footer
    if (document.querySelector(".__portal") && document.querySelector(".__portal").querySelector("div")){
        const login_footer = document.querySelector(".__portal").querySelector("div");
        login_footer.style.display = "none";
    }
}

// check if there is login popup
function nodeInsertedCallback(event) {
    const scroll_element = document.querySelector("body");
    const login_popup_list = document.querySelectorAll('[data-testid="overlay"]');
    if (login_popup_list.length > 0) {
        const login_popup = login_popup_list[login_popup_list.length - 1];
        if (login_popup.innerText.indexOf("登入") > -1) {
            if (login_popup_list.length <= 1) {
                scroll_element.style.overflow = "";
            }
            login_popup.style.display = "none";
            // document.removeEventListener('DOMNodeInserted', nodeInsertedCallback);
        }
    }
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);

