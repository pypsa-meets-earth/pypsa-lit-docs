---
sidebar_position: 2
---

# Getting Started

To begin using this application, we have precompiled a solved **PyPSA-earth** project for your convenience. Follow the steps below to retrieve a sample **PyPSA-earth** directory and set up the necessary environment to run **PyPSA-earth-lit**.

Depending on what you need, recommended order.

```console
- mkdir tauritron-project
- cd tauritron-project
- git clone https://github.com/PyPSA-meets-earth/PyPSA-earth-lit.git
```

```console
- make -f ./PyPSA-earth-lit/Makefile get_data
- conda env create -f ./PyPSA-earth-lit/env.yaml
- conda activate PyPSA-earth-lit
- cd PyPSA-earth-lit
- pip install -e .
- make -f ./Makefile run_app
```
