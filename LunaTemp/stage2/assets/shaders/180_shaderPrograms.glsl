["\n#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute mediump vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    vs_COLOR0 = in_COLOR0;\n    vs_TEXCOORD1.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _Color;\nuniform lowp sampler2D _MainTex;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD1;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nmediump vec4 u_xlat16_0;\nlowp vec4 u_xlat10_0;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD1.xy);\n    u_xlat16_0 = u_xlat10_0 * _Color;\n    u_xlat0 = u_xlat16_0 * vs_COLOR0;\n    SV_Target0 = u_xlat0;\n    return;\n}\n\n","\n#version 100\n\nuniform \tvec4 _ProjectionParams;\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixV[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute mediump vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD3;\nvec4 u_xlat0;\nvec4 u_xlat1;\nfloat u_xlat2;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    gl_Position = u_xlat1;\n    vs_COLOR0 = in_COLOR0;\n    vs_TEXCOORD1.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat2 = u_xlat0.y * hlslcc_mtx4x4unity_MatrixV[1].z;\n    u_xlat0.x = hlslcc_mtx4x4unity_MatrixV[0].z * u_xlat0.x + u_xlat2;\n    u_xlat0.x = hlslcc_mtx4x4unity_MatrixV[2].z * u_xlat0.z + u_xlat0.x;\n    u_xlat0.x = hlslcc_mtx4x4unity_MatrixV[3].z * u_xlat0.w + u_xlat0.x;\n    vs_TEXCOORD3.z = (-u_xlat0.x);\n    u_xlat0.x = u_xlat1.y * _ProjectionParams.x;\n    u_xlat0.w = u_xlat0.x * 0.5;\n    u_xlat0.xz = u_xlat1.xw * vec2(0.5, 0.5);\n    vs_TEXCOORD3.w = u_xlat1.w;\n    vs_TEXCOORD3.xy = u_xlat0.zz + u_xlat0.xw;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _Color;\nuniform \tvec4 _CameraFadeParams;\nuniform lowp sampler2D _MainTex;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD3;\n#define SV_Target0 gl_FragData[0]\nfloat u_xlat0;\nvec4 u_xlat1;\nmediump vec4 u_xlat16_1;\nlowp vec4 u_xlat10_1;\nvoid main()\n{\n    u_xlat0 = vs_TEXCOORD3.z + (-_CameraFadeParams.x);\n    u_xlat0 = u_xlat0 * _CameraFadeParams.y;\n    u_xlat0 = clamp(u_xlat0, 0.0, 1.0);\n    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD1.xy);\n    u_xlat16_1 = u_xlat10_1 * _Color;\n    u_xlat1 = u_xlat16_1 * vs_COLOR0;\n    u_xlat1.w = u_xlat0 * u_xlat1.w;\n    SV_Target0 = u_xlat1;\n    return;\n}\n\n","\n#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute mediump vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    vs_COLOR0 = in_COLOR0;\n    vs_TEXCOORD1.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _Color;\nuniform \tmediump vec4 _ColorAddSubDiff;\nuniform lowp sampler2D _MainTex;\nvarying highp vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD1;\n#define SV_Target0 gl_FragData[0]\nmediump vec4 u_xlat16_0;\nlowp vec4 u_xlat10_0;\nvec3 u_xlat1;\nmediump vec3 u_xlat16_2;\nfloat u_xlat10;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD1.xy);\n    u_xlat16_0 = u_xlat10_0 * _Color;\n    u_xlat1.xyz = vs_COLOR0.xyz * _ColorAddSubDiff.xxx + u_xlat16_0.xyz;\n    u_xlat10 = u_xlat16_0.w * vs_COLOR0.w;\n    SV_Target0.w = u_xlat10;\n    u_xlat16_2.xyz = (-u_xlat1.xyz) + abs(u_xlat1.xyz);\n    SV_Target0.xyz = _ColorAddSubDiff.yyy * u_xlat16_2.xyz + u_xlat1.xyz;\n    return;\n}\n\n"]