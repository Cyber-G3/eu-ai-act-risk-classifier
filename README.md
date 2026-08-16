# EU AI Act Risk Classifier

[Español](README.es.md) · Free · privacy-first · browser-only

**[Open the free classifier →](https://cyber-g3.github.io/eu-ai-act-risk-classifier/)**

Professional AI governance and compliance support: [SpectraSec](https://www.spectrasec.eu/).

A professional, transparent preliminary classification tool for AI providers, deployers, importers, distributors, authorised representatives and product manufacturers. Version 1.0 uses a seven-step decision path and explains why each regulatory route was triggered.

## Coverage

- Article 5 prohibited-practice prompts.
- Article 6(1) and Annex I product-safety route.
- Article 6(2) and Annex III use-case route.
- Article 6(3) potential exception prompt.
- Article 50 transparency prompts.
- Territorial-scope and AI-system-definition screens.
- Operator-role and GPAI screens.
- Explained result, decision triggers, uncertainty and initial obligations.
- Confidence indicator and 7/30/90-day action plan.
- Local save plus Markdown, JSON and print/PDF exports.
- English and Spanish interface.
- No account, backend or analytics.

See [the classification methodology](METHODOLOGY.md) and [release history](CHANGELOG.md).

## Important limitation

This is preliminary decision support, not a legal classification or legal advice. Classification depends on intended purpose, technical design, operator role, facts, exceptions, guidance, amendments and applicable sector law.

## Run locally

Serve this directory with any static web server, for example `python -m http.server 8080`. Run the deterministic classification tests with `npm test`.

## Sources

- [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng)
- [European Commission AI Act overview](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)

Source baseline reviewed 16 August 2026.

## Licence

Apache-2.0. © 2026 SpectraSec.
