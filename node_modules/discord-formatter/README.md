# discord-formatter
#### A package that lets you easily do Discord message formatting.

All formats were sourced from [here](https://discord.com/developers/docs/reference#message-formatting).

## Documentation

### formatChannel
| Parameter | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| id | [Snowflake](#snowflake) | no | *none* | The channel's ID |
Returns: `<#${Snowflake}>`, aka `string`

### formatEmoji
| Parameter | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| name | string | no | *none* | The emoji's name |
| id | [Snowflake](#snowflake) | no | *none* | The emoji's ID |
| animated | boolean | yes | `false` | Whether the emoji is animated or not |
Returns: `<:${string}:${Snowflake}>` for normal emojis and `<a:${string}:${Snowflake}>` for animated emojis, aka `string`

### formatRole
| Parameter | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| id | [Snowflake](#snowflake) | no | *none* | The role's ID |
Returns: `<@&${Snowflake}>`, aka `string`

### formatTimestamp
| Parameter | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| date | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) \| number | no | *none* | The Date for that timestamp, or a UNIX timestamp (in seconds) |
| style | [TimestampStyle](#timestampstyle) | yes | `TimestampStyle.ShortDateTime` | The timestamp's display style |
Returns: `<t:${number}:${ShortTimestampStyle}>`, aka `string`

### formatUser
| Parameter | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
| id | [Snowflake](#snowflake) | no | *none* | The user's ID |
| hasNickname | boolean | yes | `false` | Whether the user has a nickname or not |
Returns: `<@${Snowflake}>` for users without a nickname, `<@!${Snowflake}>` for users with a nickname, aka `string`

### TimestampStyle
```ts
enum TimestampStyle {
    ShortTime = 'SHORT_TIME',
    LongTime = 'LONG_TIME',
    ShortDate = 'SHORT_DATE',
    LongDate = 'LONG_DATE',
    ShortDateTime = 'SHORT_DATE_TIME',
    LongDateTime = 'LONG_DATE_TIME',
    RelativeTime = 'RELATIVE_TIME',
}
```

### ShortTimestampStyle
```ts
type ShortTimestampStyle = 't' | 'T' | 'd' | 'D' | 'f' | 'F' | 'R';
```

### Snowflake
Discord's ID format.
```ts
type Snowflake = `${bigint}`; // aka string
```

## Contributing

### Code of Conduct
The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

### Development Process
All changes happen through pull requests. They're the best way to propose changes. We welcome your pull requests and after we review them, they can be merged into the project.

### Standard Commit Messages
This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) standard.  
Please follow these steps to ensure your commit messages are standardized.

### Pull Requests
1. Fork the repository and create a new branch.
2. Add your code (and tests if required).
3. Describe the PR and open it.
