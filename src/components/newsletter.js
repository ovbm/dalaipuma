import React from 'react';

export default function newsletter() {
  return (
    <div>
      <link
        href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      <div
        id="mc_embed_signup"
        style={{
          background: 'transparent',
          color: 'white',
          clear: 'left',
          font: '14px Helvetica,Arial,sans-serif',
          width: 300,
          overflow: 'hidden'
        }}
      >
        <form
          action="https://band.us18.list-manage.com/subscribe/post?u=2abfeaaabd3d0205adb46d2de&amp;id=be683207e5"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Newsletter</label>
            <input
              style={{
                background: 'transparent',
                color: 'white',
                marginBottom: '1em'
              }}
              type="email"
              value=""
              name="EMAIL"
              class="email"
              id="mce-EMAIL"
              placeholder="email"
              required
            />
            <div
              style={{
                position: "absolute",
                left: "-5000px"
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_2abfeaaabd3d0205adb46d2de_be683207e5"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  marginBottom: '2em',
                }}
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
