# SABE
Python (>=3.13) and Javascript Demo for the Seminar "Security Analysis for Browser Extensions" at LMU (WiSe 24/25) for the Paper [XHOUND: Quantifying the Fingerprintability of Browser Extensions](https://ieeexplore.ieee.org/document/7958618)
## Dependencies
Make sure you have Python >=3.13 installed.

- Selenium (4.26.1): `pip install selenium`
## Execute
1. Make sure you are serving the honeypage trough a simple webserver (some extension will not execute with a file:/ url): `python -m http.server 8000`
2. Open the `fingerprint.ipynb` yupyter notebook and have fun 😁
