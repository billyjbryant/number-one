
# number-one

![CI](https://github.com/builders-club/number-one/workflows/CI/badge.svg?branch=main) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-15-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Number One is a [Twitch](https://twitch.tv) chat bot that provides the following features:

- Responds to commands in the chatroom (i.e. !help)
- Provides overlays that can be added to the stream to provide context, information, etc
- An admin panel to control various commands and features of the bot
- Stores all events of a stream in a FaunaDb for later analysis

## Environment Variables

| Variable              | Description                                      |
| --------------------- | ------------------------------------------------ |
| HOST                  | Url the application is running at                |
| PORT                  | Port the application is running under            |
| TWITCH_CHANNEL_ID     | Twitch's unique identifier for the channel       |
| TWITCH_CLIENT_ID      | Twitch's API Client ID                           |
| TWITCH_CLIENT_SECRET  | Twitch's API Client Secret                       |
| TWITCH_CHANNEL        | Twitch channel to connect to                     |
| TWITCH_BOT_USERNAME   | Twitch bot login                                 |
| TWITCH_BOT_AUTH_TOKEN | OAuth token for the Twitch account used as a bot |
| FAUNADB_SECRET        | Fauna Secret Key                                 |
| STREAM_ELEMENTS_JWT   | Stream Elements token to integrate donations     |

## Contributors

Want to contribute? Check out our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing](CONTRIBUTING.md) docs. This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/miko1991"><img src="https://avatars0.githubusercontent.com/u/27098411?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mikolaj Marciniak</b></sub></a><br /><a href="https://github.com/builders-club/number-one/commits?author=miko1991" title="Code">💻</a></td>
    <td align="center"><a href="https://baldbeardedbuilder.com/"><img src="https://avatars2.githubusercontent.com/u/1228996?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Jolley</b></sub></a><br /><a href="https://github.com/builders-club/number-one/commits?author=MichaelJolley" title="Code">💻</a> <a href="#ideas-MichaelJolley" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/builders-club/number-one/commits?author=MichaelJolley" title="Documentation">📖</a></td>
    <td align="center"><a href="http://twitch.tv/whitep4nth3r"><img src="https://avatars0.githubusercontent.com/u/52798353?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Salma @whitep4nth3r</b></sub></a><br /><a href="#ideas-whitep4nth3r" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://c-j.tech"><img src="https://avatars0.githubusercontent.com/u/3969086?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Jones</b></sub></a><br /><a href="#ideas-cmjchrisjones" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Flyken271"><img src="https://avatars0.githubusercontent.com/u/39961800?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Flyken</b></sub></a><br /><a href="#ideas-Flyken271" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/parithon"><img src="https://avatars3.githubusercontent.com/u/8602418?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anthony Conrad (parithon)</b></sub></a><br /><a href="#ideas-parithon" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/builders-club/number-one/commits?author=parithon" title="Code">💻</a> <a href="https://github.com/builders-club/number-one/commits?author=parithon" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ForTheJim"><img src="https://avatars3.githubusercontent.com/u/1657542?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jim</b></sub></a><br /><a href="#ideas-ForTheJim" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ElliottBrand"><img src="https://avatars2.githubusercontent.com/u/47930099?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steve Elliott</b></sub></a><br /><a href="#ideas-ElliottBrand" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/builders-club/number-one/commits?author=ElliottBrand" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/mholloway24"><img src="https://avatars2.githubusercontent.com/u/40776983?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mike Holloway</b></sub></a><br /><a href="https://github.com/builders-club/number-one/issues?q=author%3Amholloway24" title="Bug reports">🐛</a> <a href="https://github.com/builders-club/number-one/commits?author=mholloway24" title="Code">💻</a> <a href="#ideas-mholloway24" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/MaryJoStaebler"><img src="https://avatars2.githubusercontent.com/u/48457743?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mary Jo</b></sub></a><br /><a href="https://github.com/builders-club/number-one/issues?q=author%3AMaryJoStaebler" title="Bug reports">🐛</a> <a href="#ideas-MaryJoStaebler" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/builders-club/number-one/commits?author=MaryJoStaebler" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jwalter"><img src="https://avatars3.githubusercontent.com/u/349523?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jwalter</b></sub></a><br /><a href="https://github.com/builders-club/number-one/commits?author=jwalter" title="Documentation">📖</a> <a href="https://github.com/builders-club/number-one/commits?author=jwalter" title="Code">💻</a> <a href="https://github.com/builders-club/number-one/commits?author=jwalter" title="Tests">⚠️</a> <a href="#ideas-jwalter" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/builders-club/number-one/issues?q=author%3Ajwalter" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://iamnotmyself.com"><img src="https://avatars3.githubusercontent.com/u/73120?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bobby Johnson</b></sub></a><br /><a href="https://github.com/builders-club/number-one/issues?q=author%3ANotMyself" title="Bug reports">🐛</a> <a href="https://github.com/builders-club/number-one/commits?author=NotMyself" title="Code">💻</a> <a href="#tool-NotMyself" title="Tools">🔧</a></td>
    <td align="center"><a href="https://www.ramblinggeek.co.uk"><img src="https://avatars3.githubusercontent.com/u/7108949?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wayne Taylor</b></sub></a><br /><a href="#ideas-RamblingGeekUK" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/builders-club/number-one/commits?author=RamblingGeekUK" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/omnoms"><img src="https://avatars3.githubusercontent.com/u/7261863?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marko V</b></sub></a><br /><a href="https://github.com/builders-club/number-one/commits?author=omnoms" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/radu-duku"><img src="https://avatars0.githubusercontent.com/u/10188317?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Radu Antal </b></sub></a><br /><a href="#ideas-radu-duku" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
