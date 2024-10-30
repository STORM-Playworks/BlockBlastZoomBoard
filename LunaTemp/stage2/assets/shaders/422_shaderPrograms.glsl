["\n#version 100\n\nuniform \tvec3 _WorldSpaceCameraPos;\nuniform \tvec4 _ScreenParams;\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tvec4 hlslcc_mtx4x4glstate_matrix_projection[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _FaceColor;\nuniform \tfloat _FaceDilate;\nuniform \tfloat _OutlineSoftness;\nuniform \tmediump vec4 _OutlineColor;\nuniform \tfloat _OutlineWidth;\nuniform \tfloat _WeightNormal;\nuniform \tfloat _WeightBold;\nuniform \tfloat _ScaleRatioA;\nuniform \tfloat _VertexOffsetX;\nuniform \tfloat _VertexOffsetY;\nuniform \tvec4 _ClipRect;\nuniform \tfloat _MaskSoftnessX;\nuniform \tfloat _MaskSoftnessY;\nuniform \tfloat _GradientScale;\nuniform \tfloat _ScaleX;\nuniform \tfloat _ScaleY;\nuniform \tfloat _PerspectiveFilter;\nuniform \tfloat _Sharpness;\nattribute highp vec4 in_POSITION0;\nattribute highp vec3 in_NORMAL0;\nattribute mediump vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec2 in_TEXCOORD1;\nvarying mediump vec4 vs_COLOR0;\nvarying mediump vec4 vs_COLOR1;\nvarying highp vec4 vs_TEXCOORD0;\nvarying mediump vec4 vs_TEXCOORD1;\nvarying mediump vec4 vs_TEXCOORD2;\nvec2 u_xlat0;\nbool u_xlatb0;\nvec4 u_xlat1;\nvec4 u_xlat2;\nvec4 u_xlat3;\nmediump vec4 u_xlat16_3;\nvec4 u_xlat4;\nfloat u_xlat5;\nfloat u_xlat7;\nfloat u_xlat10;\nfloat u_xlat12;\nfloat u_xlat15;\nbool u_xlatb15;\nvoid main()\n{\n    u_xlat0.xy = in_POSITION0.xy + vec2(_VertexOffsetX, _VertexOffsetY);\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat1 = hlslcc_mtx4x4unity_ObjectToWorld[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat1;\n    u_xlat2 = u_xlat1 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1.xyz = hlslcc_mtx4x4unity_ObjectToWorld[3].xyz * in_POSITION0.www + u_xlat1.xyz;\n    u_xlat1.xyz = (-u_xlat1.xyz) + _WorldSpaceCameraPos.xyz;\n    u_xlat3 = u_xlat2.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat3 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat2.xxxx + u_xlat3;\n    u_xlat3 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat2.zzzz + u_xlat3;\n    u_xlat2 = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat2.wwww + u_xlat3;\n    gl_Position = u_xlat2;\n    u_xlat16_3 = in_COLOR0 * _FaceColor;\n    u_xlat16_3.xyz = u_xlat16_3.www * u_xlat16_3.xyz;\n    vs_COLOR0 = u_xlat16_3;\n    u_xlat10 = dot(u_xlat1.xyz, u_xlat1.xyz);\n    u_xlat10 = inversesqrt(u_xlat10);\n    u_xlat1.xyz = vec3(u_xlat10) * u_xlat1.xyz;\n    u_xlat2.x = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[0].xyz);\n    u_xlat2.y = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[1].xyz);\n    u_xlat2.z = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[2].xyz);\n    u_xlat10 = dot(u_xlat2.xyz, u_xlat2.xyz);\n    u_xlat10 = inversesqrt(u_xlat10);\n    u_xlat2.xyz = vec3(u_xlat10) * u_xlat2.xyz;\n    u_xlat10 = dot(u_xlat2.xyz, u_xlat1.xyz);\n    u_xlat1.xy = _ScreenParams.yy * hlslcc_mtx4x4glstate_matrix_projection[1].xy;\n    u_xlat1.xy = hlslcc_mtx4x4glstate_matrix_projection[0].xy * _ScreenParams.xx + u_xlat1.xy;\n    u_xlat1.xy = abs(u_xlat1.xy) * vec2(_ScaleX, _ScaleY);\n    u_xlat1.xy = u_xlat2.ww / u_xlat1.xy;\n    u_xlat15 = dot(u_xlat1.xy, u_xlat1.xy);\n    u_xlat1.xy = vec2(_MaskSoftnessX, _MaskSoftnessY) * vec2(0.25, 0.25) + u_xlat1.xy;\n    u_xlat1.zw = vec2(0.25, 0.25) / u_xlat1.xy;\n    u_xlat15 = inversesqrt(u_xlat15);\n    u_xlat2.x = abs(in_TEXCOORD1.y) * _GradientScale;\n    u_xlat7 = _Sharpness + 1.0;\n    u_xlat2.x = u_xlat7 * u_xlat2.x;\n    u_xlat7 = u_xlat15 * u_xlat2.x;\n    u_xlat12 = (-_PerspectiveFilter) + 1.0;\n    u_xlat12 = u_xlat12 * abs(u_xlat7);\n    u_xlat15 = u_xlat15 * u_xlat2.x + (-u_xlat12);\n    u_xlat10 = abs(u_xlat10) * u_xlat15 + u_xlat12;\n    u_xlatb15 = hlslcc_mtx4x4glstate_matrix_projection[3].w==0.0;\n    u_xlat10 = (u_xlatb15) ? u_xlat10 : u_xlat7;\n    u_xlat15 = _OutlineSoftness * _ScaleRatioA;\n    u_xlat15 = u_xlat15 * u_xlat10 + 1.0;\n    u_xlat2.x = u_xlat10 / u_xlat15;\n    u_xlat10 = _OutlineWidth * _ScaleRatioA;\n    u_xlat10 = u_xlat2.x * u_xlat10;\n    u_xlat15 = min(u_xlat10, 1.0);\n    u_xlat15 = sqrt(u_xlat15);\n    u_xlat4.x = in_COLOR0.w * _OutlineColor.w;\n    u_xlat4.xyz = _OutlineColor.xyz * u_xlat4.xxx + (-u_xlat16_3.xyz);\n    u_xlat4.w = _OutlineColor.w * in_COLOR0.w + (-u_xlat16_3.w);\n    u_xlat3 = vec4(u_xlat15) * u_xlat4 + u_xlat16_3;\n    vs_COLOR1 = u_xlat3;\n    u_xlat3 = max(_ClipRect, vec4(-2e+10, -2e+10, -2e+10, -2e+10));\n    u_xlat3 = min(u_xlat3, vec4(2e+10, 2e+10, 2e+10, 2e+10));\n    u_xlat4.xy = u_xlat0.xy + (-u_xlat3.xy);\n    u_xlat0.xy = u_xlat0.xy * vec2(2.0, 2.0) + (-u_xlat3.xy);\n    u_xlat1.xy = (-u_xlat3.zw) + u_xlat0.xy;\n    u_xlat0.xy = (-u_xlat3.xy) + u_xlat3.zw;\n    vs_TEXCOORD0.zw = u_xlat4.xy / u_xlat0.xy;\n    vs_TEXCOORD2 = u_xlat1;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;\n    u_xlatb0 = 0.0>=in_TEXCOORD1.y;\n    u_xlat0.x = u_xlatb0 ? 1.0 : float(0.0);\n    u_xlat5 = (-_WeightNormal) + _WeightBold;\n    u_xlat0.x = u_xlat0.x * u_xlat5 + _WeightNormal;\n    u_xlat0.x = u_xlat0.x * 0.25 + _FaceDilate;\n    u_xlat0.x = u_xlat0.x * _ScaleRatioA;\n    u_xlat0.x = (-u_xlat0.x) * 0.5 + 0.5;\n    u_xlat2.w = u_xlat0.x * u_xlat2.x + -0.5;\n    u_xlat2.y = (-u_xlat10) * 0.5 + u_xlat2.w;\n    u_xlat2.z = u_xlat10 * 0.5 + u_xlat2.w;\n    vs_TEXCOORD1 = u_xlat2;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec4 vs_TEXCOORD0;\nvarying mediump vec4 vs_TEXCOORD1;\n#define SV_Target0 gl_FragData[0]\nlowp float u_xlat10_0;\nmediump float u_xlat16_1;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy).w;\n    u_xlat16_1 = u_xlat10_0 * vs_TEXCOORD1.x + (-vs_TEXCOORD1.w);\n    u_xlat16_1 = clamp(u_xlat16_1, 0.0, 1.0);\n    SV_Target0 = vec4(u_xlat16_1) * vs_COLOR0;\n    return;\n}\n\n"]