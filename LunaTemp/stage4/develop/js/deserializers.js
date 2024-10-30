var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.JointSpring' )
  var i897 = data
  i896.spring = i897[0]
  i896.damper = i897[1]
  i896.targetPosition = i897[2]
  return i896
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.JointMotor' )
  var i899 = data
  i898.m_TargetVelocity = i899[0]
  i898.m_Force = i899[1]
  i898.m_FreeSpin = i899[2]
  return i898
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.JointLimits' )
  var i901 = data
  i900.m_Min = i901[0]
  i900.m_Max = i901[1]
  i900.m_Bounciness = i901[2]
  i900.m_BounceMinVelocity = i901[3]
  i900.m_ContactDistance = i901[4]
  i900.minBounce = i901[5]
  i900.maxBounce = i901[6]
  return i900
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.JointDrive' )
  var i903 = data
  i902.m_PositionSpring = i903[0]
  i902.m_PositionDamper = i903[1]
  i902.m_MaximumForce = i903[2]
  i902.m_UseAcceleration = i903[3]
  return i902
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i905 = data
  i904.m_Spring = i905[0]
  i904.m_Damper = i905[1]
  return i904
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i907 = data
  i906.m_Limit = i907[0]
  i906.m_Bounciness = i907[1]
  i906.m_ContactDistance = i907[2]
  return i906
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i909 = data
  i908.m_ExtremumSlip = i909[0]
  i908.m_ExtremumValue = i909[1]
  i908.m_AsymptoteSlip = i909[2]
  i908.m_AsymptoteValue = i909[3]
  i908.m_Stiffness = i909[4]
  return i908
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i911 = data
  i910.m_LowerAngle = i911[0]
  i910.m_UpperAngle = i911[1]
  return i910
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i913 = data
  i912.m_MotorSpeed = i913[0]
  i912.m_MaximumMotorTorque = i913[1]
  return i912
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i915 = data
  i914.m_DampingRatio = i915[0]
  i914.m_Frequency = i915[1]
  i914.m_Angle = i915[2]
  return i914
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i917 = data
  i916.m_LowerTranslation = i917[0]
  i916.m_UpperTranslation = i917[1]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i919 = data
  i918.name = i919[0]
  i918.width = i919[1]
  i918.height = i919[2]
  i918.mipmapCount = i919[3]
  i918.anisoLevel = i919[4]
  i918.filterMode = i919[5]
  i918.hdr = !!i919[6]
  i918.format = i919[7]
  i918.wrapMode = i919[8]
  i918.alphaIsTransparency = !!i919[9]
  i918.alphaSource = i919[10]
  i918.graphicsFormat = i919[11]
  i918.sRGBTexture = !!i919[12]
  i918.desiredColorSpace = i919[13]
  i918.wrapU = i919[14]
  i918.wrapV = i919[15]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i920 = root || new pc.UnityMaterial()
  var i921 = data
  i920.name = i921[0]
  request.r(i921[1], i921[2], 0, i920, 'shader')
  i920.renderQueue = i921[3]
  i920.enableInstancing = !!i921[4]
  var i923 = i921[5]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i923[i + 0]) );
  }
  i920.floatParameters = i922
  var i925 = i921[6]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i925[i + 0]) );
  }
  i920.colorParameters = i924
  var i927 = i921[7]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i927[i + 0]) );
  }
  i920.vectorParameters = i926
  var i929 = i921[8]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i929[i + 0]) );
  }
  i920.textureParameters = i928
  var i931 = i921[9]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i931[i + 0]) );
  }
  i920.materialFlags = i930
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i935 = data
  i934.name = i935[0]
  i934.value = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i939 = data
  i938.name = i939[0]
  i938.value = new pc.Color(i939[1], i939[2], i939[3], i939[4])
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i943 = data
  i942.name = i943[0]
  i942.value = new pc.Vec4( i943[1], i943[2], i943[3], i943[4] )
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i947 = data
  i946.name = i947[0]
  request.r(i947[1], i947[2], 0, i946, 'value')
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i951 = data
  i950.name = i951[0]
  i950.enabled = !!i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i953 = data
  i952.position = new pc.Vec3( i953[0], i953[1], i953[2] )
  i952.scale = new pc.Vec3( i953[3], i953[4], i953[5] )
  i952.rotation = new pc.Quat(i953[6], i953[7], i953[8], i953[9])
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i955 = data
  i954.enabled = !!i955[0]
  request.r(i955[1], i955[2], 0, i954, 'sharedMaterial')
  var i957 = i955[3]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.sharedMaterials = i956
  i954.receiveShadows = !!i955[4]
  i954.shadowCastingMode = i955[5]
  i954.sortingLayerID = i955[6]
  i954.sortingOrder = i955[7]
  i954.lightmapIndex = i955[8]
  i954.lightmapSceneIndex = i955[9]
  i954.lightmapScaleOffset = new pc.Vec4( i955[10], i955[11], i955[12], i955[13] )
  i954.lightProbeUsage = i955[14]
  i954.reflectionProbeUsage = i955[15]
  i954.color = new pc.Color(i955[16], i955[17], i955[18], i955[19])
  request.r(i955[20], i955[21], 0, i954, 'sprite')
  i954.flipX = !!i955[22]
  i954.flipY = !!i955[23]
  i954.drawMode = i955[24]
  i954.size = new pc.Vec2( i955[25], i955[26] )
  i954.tileMode = i955[27]
  i954.adaptiveModeThreshold = i955[28]
  i954.maskInteraction = i955[29]
  i954.spriteSortPoint = i955[30]
  return i954
}

Deserializers["BoardContainer"] = function (request, data, root) {
  var i960 = root || request.c( 'BoardContainer' )
  var i961 = data
  i960.AnimateBoardGrow = !!i961[0]
  i960.width = i961[1]
  i960.height = i961[2]
  var i963 = i961[3]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i960.blocks = i962
  var i965 = i961[4]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i960.allBlocksInBoard = i964
  i960.blockScale = i961[5]
  request.r(i961[6], i961[7], 0, i960, 'placeBlockPoint')
  request.r(i961[8], i961[9], 0, i960, 'blockPrefab')
  request.r(i961[10], i961[11], 0, i960, 'shake')
  var i967 = i961[12]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i960.gemCounters = i966
  i960.gridSizeSteps = i961[13]
  i960.blockRiseTime = i961[14]
  i960.totalBlockAnimationTimes = i961[15]
  i960.blockLandAnimCurve = new pc.AnimationCurve( { keys_flow: i961[16] } )
  request.r(i961[17], i961[18], 0, i960, 'cameraController')
  request.r(i961[19], i961[20], 0, i960, 'border')
  i960.borderSizePerUnit = i961[21]
  i960.borderSizeOffset = i961[22]
  i960.boardOffsetPerStep = i961[23]
  i960.duration = i961[24]
  i960.strength = new pc.Vec3( i961[25], i961[26], i961[27] )
  i960.vibrato = i961[28]
  request.r(i961[29], i961[30], 0, i960, 'nextBlockWidth')
  request.r(i961[31], i961[32], 0, i960, 'nextBlockHeight')
  i960.hexaBoard = !!i961[33]
  i960.dstXHexaMode = i961[34]
  var i969 = i961[35]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(!!i969[i + 0]);
  }
  i960.dataBlocksHexa = i968
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i977 = data
  i976.playAutomatically = !!i977[0]
  request.r(i977[1], i977[2], 0, i976, 'clip')
  var i979 = i977[3]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.clips = i978
  i976.wrapMode = i977[4]
  i976.enabled = !!i977[5]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i983 = data
  i982.name = i983[0]
  i982.tagId = i983[1]
  i982.enabled = !!i983[2]
  i982.isStatic = !!i983[3]
  i982.layer = i983[4]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i985 = data
  i984.usedByComposite = !!i985[0]
  i984.autoTiling = !!i985[1]
  i984.size = new pc.Vec2( i985[2], i985[3] )
  i984.edgeRadius = i985[4]
  i984.enabled = !!i985[5]
  i984.isTrigger = !!i985[6]
  i984.usedByEffector = !!i985[7]
  i984.density = i985[8]
  i984.offset = new pc.Vec2( i985[9], i985[10] )
  request.r(i985[11], i985[12], 0, i984, 'material')
  return i984
}

Deserializers["BlockBoard"] = function (request, data, root) {
  var i986 = root || request.c( 'BlockBoard' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'gemSR')
  i986.blockIndex = i987[2]
  i986.color = i987[3]
  i986.gemColor = i987[4]
  i986.x = i987[5]
  i986.y = i987[6]
  request.r(i987[7], i987[8], 0, i986, 'block')
  request.r(i987[9], i987[10], 0, i986, 'blockHightLight')
  request.r(i987[11], i987[12], 0, i986, 'emptyBlock')
  var i989 = i987[13]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986.blocksBoardCross1 = i988
  var i991 = i987[14]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i986.blocksBoardCross2 = i990
  i986.inactiveSortOrder = i987[15]
  i986.activeSortOrder = i987[16]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i993 = data
  i992.pivot = new pc.Vec2( i993[0], i993[1] )
  i992.anchorMin = new pc.Vec2( i993[2], i993[3] )
  i992.anchorMax = new pc.Vec2( i993[4], i993[5] )
  i992.sizeDelta = new pc.Vec2( i993[6], i993[7] )
  i992.anchoredPosition3D = new pc.Vec3( i993[8], i993[9], i993[10] )
  i992.rotation = new pc.Quat(i993[11], i993[12], i993[13], i993[14])
  i992.scale = new pc.Vec3( i993[15], i993[16], i993[17] )
  return i992
}

Deserializers["GemCounter"] = function (request, data, root) {
  var i994 = root || request.c( 'GemCounter' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'countText')
  request.r(i995[2], i995[3], 0, i994, 'gemIcon')
  i994.neededAmount = i995[4]
  i994.currentAmount = i995[5]
  i994.receiveAnimDuration = i995[6]
  i994.flyOverDuration = i995[7]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i997 = data
  i996.cullTransparentMesh = !!i997[0]
  return i996
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.Image' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'm_Sprite')
  i998.m_Type = i999[2]
  i998.m_PreserveAspect = !!i999[3]
  i998.m_FillCenter = !!i999[4]
  i998.m_FillMethod = i999[5]
  i998.m_FillAmount = i999[6]
  i998.m_FillClockwise = !!i999[7]
  i998.m_FillOrigin = i999[8]
  i998.m_UseSpriteMesh = !!i999[9]
  i998.m_PixelsPerUnitMultiplier = i999[10]
  request.r(i999[11], i999[12], 0, i998, 'm_Material')
  i998.m_Maskable = !!i999[13]
  i998.m_Color = new pc.Color(i999[14], i999[15], i999[16], i999[17])
  i998.m_RaycastTarget = !!i999[18]
  i998.m_RaycastPadding = new pc.Vec4( i999[19], i999[20], i999[21], i999[22] )
  return i998
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1001 = data
  i1000.m_hasFontAssetChanged = !!i1001[0]
  request.r(i1001[1], i1001[2], 0, i1000, 'm_baseMaterial')
  i1000.m_maskOffset = new pc.Vec4( i1001[3], i1001[4], i1001[5], i1001[6] )
  i1000.m_text = i1001[7]
  i1000.m_isRightToLeft = !!i1001[8]
  request.r(i1001[9], i1001[10], 0, i1000, 'm_fontAsset')
  request.r(i1001[11], i1001[12], 0, i1000, 'm_sharedMaterial')
  var i1003 = i1001[13]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i1000.m_fontSharedMaterials = i1002
  request.r(i1001[14], i1001[15], 0, i1000, 'm_fontMaterial')
  var i1005 = i1001[16]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1000.m_fontMaterials = i1004
  i1000.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1001[17], i1001[18], i1001[19], i1001[20])
  i1000.m_fontColor = new pc.Color(i1001[21], i1001[22], i1001[23], i1001[24])
  i1000.m_enableVertexGradient = !!i1001[25]
  i1000.m_colorMode = i1001[26]
  i1000.m_fontColorGradient = request.d('TMPro.VertexGradient', i1001[27], i1000.m_fontColorGradient)
  request.r(i1001[28], i1001[29], 0, i1000, 'm_fontColorGradientPreset')
  request.r(i1001[30], i1001[31], 0, i1000, 'm_spriteAsset')
  i1000.m_tintAllSprites = !!i1001[32]
  request.r(i1001[33], i1001[34], 0, i1000, 'm_StyleSheet')
  i1000.m_TextStyleHashCode = i1001[35]
  i1000.m_overrideHtmlColors = !!i1001[36]
  i1000.m_faceColor = UnityEngine.Color32.ConstructColor(i1001[37], i1001[38], i1001[39], i1001[40])
  i1000.m_fontSize = i1001[41]
  i1000.m_fontSizeBase = i1001[42]
  i1000.m_fontWeight = i1001[43]
  i1000.m_enableAutoSizing = !!i1001[44]
  i1000.m_fontSizeMin = i1001[45]
  i1000.m_fontSizeMax = i1001[46]
  i1000.m_fontStyle = i1001[47]
  i1000.m_HorizontalAlignment = i1001[48]
  i1000.m_VerticalAlignment = i1001[49]
  i1000.m_textAlignment = i1001[50]
  i1000.m_characterSpacing = i1001[51]
  i1000.m_wordSpacing = i1001[52]
  i1000.m_lineSpacing = i1001[53]
  i1000.m_lineSpacingMax = i1001[54]
  i1000.m_paragraphSpacing = i1001[55]
  i1000.m_charWidthMaxAdj = i1001[56]
  i1000.m_enableWordWrapping = !!i1001[57]
  i1000.m_wordWrappingRatios = i1001[58]
  i1000.m_overflowMode = i1001[59]
  request.r(i1001[60], i1001[61], 0, i1000, 'm_linkedTextComponent')
  request.r(i1001[62], i1001[63], 0, i1000, 'parentLinkedComponent')
  i1000.m_enableKerning = !!i1001[64]
  i1000.m_enableExtraPadding = !!i1001[65]
  i1000.checkPaddingRequired = !!i1001[66]
  i1000.m_isRichText = !!i1001[67]
  i1000.m_parseCtrlCharacters = !!i1001[68]
  i1000.m_isOrthographic = !!i1001[69]
  i1000.m_isCullingEnabled = !!i1001[70]
  i1000.m_horizontalMapping = i1001[71]
  i1000.m_verticalMapping = i1001[72]
  i1000.m_uvLineOffset = i1001[73]
  i1000.m_geometrySortingOrder = i1001[74]
  i1000.m_IsTextObjectScaleStatic = !!i1001[75]
  i1000.m_VertexBufferAutoSizeReduction = !!i1001[76]
  i1000.m_useMaxVisibleDescender = !!i1001[77]
  i1000.m_pageToDisplay = i1001[78]
  i1000.m_margin = new pc.Vec4( i1001[79], i1001[80], i1001[81], i1001[82] )
  i1000.m_isUsingLegacyAnimationComponent = !!i1001[83]
  i1000.m_isVolumetricText = !!i1001[84]
  request.r(i1001[85], i1001[86], 0, i1000, 'm_Material')
  i1000.m_Maskable = !!i1001[87]
  i1000.m_Color = new pc.Color(i1001[88], i1001[89], i1001[90], i1001[91])
  i1000.m_RaycastTarget = !!i1001[92]
  i1000.m_RaycastPadding = new pc.Vec4( i1001[93], i1001[94], i1001[95], i1001[96] )
  return i1000
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.VertexGradient' )
  var i1007 = data
  i1006.topLeft = new pc.Color(i1007[0], i1007[1], i1007[2], i1007[3])
  i1006.topRight = new pc.Color(i1007[4], i1007[5], i1007[6], i1007[7])
  i1006.bottomLeft = new pc.Color(i1007[8], i1007[9], i1007[10], i1007[11])
  i1006.bottomRight = new pc.Color(i1007[12], i1007[13], i1007[14], i1007[15])
  return i1006
}

Deserializers["DestroyByTime"] = function (request, data, root) {
  var i1008 = root || request.c( 'DestroyByTime' )
  var i1009 = data
  i1008.hideObject = !!i1009[0]
  i1008.destroyTime = i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1011 = data
  i1010.bodyType = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, 'material')
  i1010.simulated = !!i1011[3]
  i1010.useAutoMass = !!i1011[4]
  i1010.mass = i1011[5]
  i1010.drag = i1011[6]
  i1010.angularDrag = i1011[7]
  i1010.gravityScale = i1011[8]
  i1010.collisionDetectionMode = i1011[9]
  i1010.sleepMode = i1011[10]
  i1010.constraints = i1011[11]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1013 = data
  i1012.enabled = !!i1013[0]
  i1012.planeDistance = i1013[1]
  i1012.referencePixelsPerUnit = i1013[2]
  i1012.isFallbackOverlay = !!i1013[3]
  i1012.renderMode = i1013[4]
  i1012.renderOrder = i1013[5]
  i1012.sortingLayerName = i1013[6]
  i1012.sortingOrder = i1013[7]
  i1012.scaleFactor = i1013[8]
  request.r(i1013[9], i1013[10], 0, i1012, 'worldCamera')
  i1012.overrideSorting = !!i1013[11]
  i1012.pixelPerfect = !!i1013[12]
  i1012.targetDisplay = i1013[13]
  i1012.overridePixelPerfect = !!i1013[14]
  return i1012
}

Deserializers["BlockObj"] = function (request, data, root) {
  var i1014 = root || request.c( 'BlockObj' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'block')
  request.r(i1015[2], i1015[3], 0, i1014, 'blockDestroyLine')
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1017 = data
  i1016.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1017[0], i1016.main)
  i1016.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1017[1], i1016.colorBySpeed)
  i1016.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1017[2], i1016.colorOverLifetime)
  i1016.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1017[3], i1016.emission)
  i1016.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1017[4], i1016.rotationBySpeed)
  i1016.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1017[5], i1016.rotationOverLifetime)
  i1016.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1017[6], i1016.shape)
  i1016.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1017[7], i1016.sizeBySpeed)
  i1016.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1017[8], i1016.sizeOverLifetime)
  i1016.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1017[9], i1016.textureSheetAnimation)
  i1016.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1017[10], i1016.velocityOverLifetime)
  i1016.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1017[11], i1016.noise)
  i1016.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1017[12], i1016.inheritVelocity)
  i1016.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1017[13], i1016.forceOverLifetime)
  i1016.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1017[14], i1016.limitVelocityOverLifetime)
  i1016.useAutoRandomSeed = !!i1017[15]
  i1016.randomSeed = i1017[16]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1018 = root || new pc.ParticleSystemMain()
  var i1019 = data
  i1018.duration = i1019[0]
  i1018.loop = !!i1019[1]
  i1018.prewarm = !!i1019[2]
  i1018.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[3], i1018.startDelay)
  i1018.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[4], i1018.startLifetime)
  i1018.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[5], i1018.startSpeed)
  i1018.startSize3D = !!i1019[6]
  i1018.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[7], i1018.startSizeX)
  i1018.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[8], i1018.startSizeY)
  i1018.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[9], i1018.startSizeZ)
  i1018.startRotation3D = !!i1019[10]
  i1018.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[11], i1018.startRotationX)
  i1018.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[12], i1018.startRotationY)
  i1018.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[13], i1018.startRotationZ)
  i1018.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1019[14], i1018.startColor)
  i1018.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[15], i1018.gravityModifier)
  i1018.simulationSpace = i1019[16]
  request.r(i1019[17], i1019[18], 0, i1018, 'customSimulationSpace')
  i1018.simulationSpeed = i1019[19]
  i1018.useUnscaledTime = !!i1019[20]
  i1018.scalingMode = i1019[21]
  i1018.playOnAwake = !!i1019[22]
  i1018.maxParticles = i1019[23]
  i1018.emitterVelocityMode = i1019[24]
  i1018.stopAction = i1019[25]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1020 = root || new pc.MinMaxCurve()
  var i1021 = data
  i1020.mode = i1021[0]
  i1020.curveMin = new pc.AnimationCurve( { keys_flow: i1021[1] } )
  i1020.curveMax = new pc.AnimationCurve( { keys_flow: i1021[2] } )
  i1020.curveMultiplier = i1021[3]
  i1020.constantMin = i1021[4]
  i1020.constantMax = i1021[5]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1022 = root || new pc.MinMaxGradient()
  var i1023 = data
  i1022.mode = i1023[0]
  i1022.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1023[1], i1022.gradientMin)
  i1022.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1023[2], i1022.gradientMax)
  i1022.colorMin = new pc.Color(i1023[3], i1023[4], i1023[5], i1023[6])
  i1022.colorMax = new pc.Color(i1023[7], i1023[8], i1023[9], i1023[10])
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1025 = data
  i1024.mode = i1025[0]
  var i1027 = i1025[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1027[i + 0]) );
  }
  i1024.colorKeys = i1026
  var i1029 = i1025[2]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1029[i + 0]) );
  }
  i1024.alphaKeys = i1028
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1030 = root || new pc.ParticleSystemColorBySpeed()
  var i1031 = data
  i1030.enabled = !!i1031[0]
  i1030.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1031[1], i1030.color)
  i1030.range = new pc.Vec2( i1031[2], i1031[3] )
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1035 = data
  i1034.color = new pc.Color(i1035[0], i1035[1], i1035[2], i1035[3])
  i1034.time = i1035[4]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1039 = data
  i1038.alpha = i1039[0]
  i1038.time = i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1040 = root || new pc.ParticleSystemColorOverLifetime()
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1041[1], i1040.color)
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1042 = root || new pc.ParticleSystemEmitter()
  var i1043 = data
  i1042.enabled = !!i1043[0]
  i1042.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[1], i1042.rateOverTime)
  i1042.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1043[2], i1042.rateOverDistance)
  var i1045 = i1043[3]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1045[i + 0]) );
  }
  i1042.bursts = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1048 = root || new pc.ParticleSystemBurst()
  var i1049 = data
  i1048.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1049[0], i1048.count)
  i1048.cycleCount = i1049[1]
  i1048.minCount = i1049[2]
  i1048.maxCount = i1049[3]
  i1048.repeatInterval = i1049[4]
  i1048.time = i1049[5]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1050 = root || new pc.ParticleSystemRotationBySpeed()
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[1], i1050.x)
  i1050.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[2], i1050.y)
  i1050.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1051[3], i1050.z)
  i1050.separateAxes = !!i1051[4]
  i1050.range = new pc.Vec2( i1051[5], i1051[6] )
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1052 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[1], i1052.x)
  i1052.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[2], i1052.y)
  i1052.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[3], i1052.z)
  i1052.separateAxes = !!i1053[4]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1054 = root || new pc.ParticleSystemShape()
  var i1055 = data
  i1054.enabled = !!i1055[0]
  i1054.shapeType = i1055[1]
  i1054.randomDirectionAmount = i1055[2]
  i1054.sphericalDirectionAmount = i1055[3]
  i1054.randomPositionAmount = i1055[4]
  i1054.alignToDirection = !!i1055[5]
  i1054.radius = i1055[6]
  i1054.radiusMode = i1055[7]
  i1054.radiusSpread = i1055[8]
  i1054.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1055[9], i1054.radiusSpeed)
  i1054.radiusThickness = i1055[10]
  i1054.angle = i1055[11]
  i1054.length = i1055[12]
  i1054.boxThickness = new pc.Vec3( i1055[13], i1055[14], i1055[15] )
  i1054.meshShapeType = i1055[16]
  request.r(i1055[17], i1055[18], 0, i1054, 'mesh')
  request.r(i1055[19], i1055[20], 0, i1054, 'meshRenderer')
  request.r(i1055[21], i1055[22], 0, i1054, 'skinnedMeshRenderer')
  i1054.useMeshMaterialIndex = !!i1055[23]
  i1054.meshMaterialIndex = i1055[24]
  i1054.useMeshColors = !!i1055[25]
  i1054.normalOffset = i1055[26]
  i1054.arc = i1055[27]
  i1054.arcMode = i1055[28]
  i1054.arcSpread = i1055[29]
  i1054.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1055[30], i1054.arcSpeed)
  i1054.donutRadius = i1055[31]
  i1054.position = new pc.Vec3( i1055[32], i1055[33], i1055[34] )
  i1054.rotation = new pc.Vec3( i1055[35], i1055[36], i1055[37] )
  i1054.scale = new pc.Vec3( i1055[38], i1055[39], i1055[40] )
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1056 = root || new pc.ParticleSystemSizeBySpeed()
  var i1057 = data
  i1056.enabled = !!i1057[0]
  i1056.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[1], i1056.x)
  i1056.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[2], i1056.y)
  i1056.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1057[3], i1056.z)
  i1056.separateAxes = !!i1057[4]
  i1056.range = new pc.Vec2( i1057[5], i1057[6] )
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1058 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1059 = data
  i1058.enabled = !!i1059[0]
  i1058.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[1], i1058.x)
  i1058.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[2], i1058.y)
  i1058.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[3], i1058.z)
  i1058.separateAxes = !!i1059[4]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1060 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.mode = i1061[1]
  i1060.animation = i1061[2]
  i1060.numTilesX = i1061[3]
  i1060.numTilesY = i1061[4]
  i1060.useRandomRow = !!i1061[5]
  i1060.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[6], i1060.frameOverTime)
  i1060.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[7], i1060.startFrame)
  i1060.cycleCount = i1061[8]
  i1060.rowIndex = i1061[9]
  i1060.flipU = i1061[10]
  i1060.flipV = i1061[11]
  i1060.spriteCount = i1061[12]
  var i1063 = i1061[13]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 2, i1062, '')
  }
  i1060.sprites = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1066 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1067 = data
  i1066.enabled = !!i1067[0]
  i1066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[1], i1066.x)
  i1066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[2], i1066.y)
  i1066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[3], i1066.z)
  i1066.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[4], i1066.radial)
  i1066.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[5], i1066.speedModifier)
  i1066.space = i1067[6]
  i1066.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[7], i1066.orbitalX)
  i1066.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[8], i1066.orbitalY)
  i1066.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[9], i1066.orbitalZ)
  i1066.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[10], i1066.orbitalOffsetX)
  i1066.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[11], i1066.orbitalOffsetY)
  i1066.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[12], i1066.orbitalOffsetZ)
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1068 = root || new pc.ParticleSystemNoise()
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.separateAxes = !!i1069[1]
  i1068.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[2], i1068.strengthX)
  i1068.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[3], i1068.strengthY)
  i1068.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[4], i1068.strengthZ)
  i1068.frequency = i1069[5]
  i1068.damping = !!i1069[6]
  i1068.octaveCount = i1069[7]
  i1068.octaveMultiplier = i1069[8]
  i1068.octaveScale = i1069[9]
  i1068.quality = i1069[10]
  i1068.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[11], i1068.scrollSpeed)
  i1068.scrollSpeedMultiplier = i1069[12]
  i1068.remapEnabled = !!i1069[13]
  i1068.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[14], i1068.remapX)
  i1068.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[15], i1068.remapY)
  i1068.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[16], i1068.remapZ)
  i1068.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[17], i1068.positionAmount)
  i1068.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[18], i1068.rotationAmount)
  i1068.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[19], i1068.sizeAmount)
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1070 = root || new pc.ParticleSystemInheritVelocity()
  var i1071 = data
  i1070.enabled = !!i1071[0]
  i1070.mode = i1071[1]
  i1070.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1071[2], i1070.curve)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1072 = root || new pc.ParticleSystemForceOverLifetime()
  var i1073 = data
  i1072.enabled = !!i1073[0]
  i1072.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1073[1], i1072.x)
  i1072.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1073[2], i1072.y)
  i1072.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1073[3], i1072.z)
  i1072.space = i1073[4]
  i1072.randomized = !!i1073[5]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1074 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1075 = data
  i1074.enabled = !!i1075[0]
  i1074.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[1], i1074.limit)
  i1074.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[2], i1074.limitX)
  i1074.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[3], i1074.limitY)
  i1074.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[4], i1074.limitZ)
  i1074.dampen = i1075[5]
  i1074.separateAxes = !!i1075[6]
  i1074.space = i1075[7]
  i1074.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1075[8], i1074.drag)
  i1074.multiplyDragByParticleSize = !!i1075[9]
  i1074.multiplyDragByParticleVelocity = !!i1075[10]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1077 = data
  i1076.enabled = !!i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'sharedMaterial')
  var i1079 = i1077[3]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1076.sharedMaterials = i1078
  i1076.receiveShadows = !!i1077[4]
  i1076.shadowCastingMode = i1077[5]
  i1076.sortingLayerID = i1077[6]
  i1076.sortingOrder = i1077[7]
  i1076.lightmapIndex = i1077[8]
  i1076.lightmapSceneIndex = i1077[9]
  i1076.lightmapScaleOffset = new pc.Vec4( i1077[10], i1077[11], i1077[12], i1077[13] )
  i1076.lightProbeUsage = i1077[14]
  i1076.reflectionProbeUsage = i1077[15]
  request.r(i1077[16], i1077[17], 0, i1076, 'mesh')
  i1076.meshCount = i1077[18]
  i1076.activeVertexStreamsCount = i1077[19]
  i1076.alignment = i1077[20]
  i1076.renderMode = i1077[21]
  i1076.sortMode = i1077[22]
  i1076.lengthScale = i1077[23]
  i1076.velocityScale = i1077[24]
  i1076.cameraVelocityScale = i1077[25]
  i1076.normalDirection = i1077[26]
  i1076.sortingFudge = i1077[27]
  i1076.minParticleSize = i1077[28]
  i1076.maxParticleSize = i1077[29]
  i1076.pivot = new pc.Vec3( i1077[30], i1077[31], i1077[32] )
  request.r(i1077[33], i1077[34], 0, i1076, 'trailMaterial')
  return i1076
}

Deserializers["EffectObj"] = function (request, data, root) {
  var i1080 = root || request.c( 'EffectObj' )
  var i1081 = data
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.halfPrecision = !!i1083[1]
  i1082.useUInt32IndexFormat = !!i1083[2]
  i1082.vertexCount = i1083[3]
  i1082.aabb = i1083[4]
  var i1085 = i1083[5]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( !!i1085[i + 0] );
  }
  i1082.streams = i1084
  i1082.vertices = i1083[6]
  var i1087 = i1083[7]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1087[i + 0]) );
  }
  i1082.subMeshes = i1086
  var i1089 = i1083[8]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 16) {
    i1088.push( new pc.Mat4().setData(i1089[i + 0], i1089[i + 1], i1089[i + 2], i1089[i + 3],  i1089[i + 4], i1089[i + 5], i1089[i + 6], i1089[i + 7],  i1089[i + 8], i1089[i + 9], i1089[i + 10], i1089[i + 11],  i1089[i + 12], i1089[i + 13], i1089[i + 14], i1089[i + 15]) );
  }
  i1082.bindposes = i1088
  var i1091 = i1083[9]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1091[i + 0]) );
  }
  i1082.blendShapes = i1090
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1097 = data
  i1096.triangles = i1097[0]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1103 = data
  i1102.name = i1103[0]
  var i1105 = i1103[1]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1105[i + 0]) );
  }
  i1102.frames = i1104
  return i1102
}

Deserializers["BoosterMoveDestroy"] = function (request, data, root) {
  var i1106 = root || request.c( 'BoosterMoveDestroy' )
  var i1107 = data
  i1106.speed = i1107[0]
  i1106.horizontal = !!i1107[1]
  return i1106
}

Deserializers["BombItem"] = function (request, data, root) {
  var i1108 = root || request.c( 'BombItem' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'bugStandObj')
  request.r(i1109[2], i1109[3], 0, i1108, 'eff_warning')
  request.r(i1109[4], i1109[5], 0, i1108, 'stepText')
  return i1108
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1111 = data
  i1110.m_UiScaleMode = i1111[0]
  i1110.m_ReferencePixelsPerUnit = i1111[1]
  i1110.m_ScaleFactor = i1111[2]
  i1110.m_ReferenceResolution = new pc.Vec2( i1111[3], i1111[4] )
  i1110.m_ScreenMatchMode = i1111[5]
  i1110.m_MatchWidthOrHeight = i1111[6]
  i1110.m_PhysicalUnit = i1111[7]
  i1110.m_FallbackScreenDPI = i1111[8]
  i1110.m_DefaultSpriteDPI = i1111[9]
  i1110.m_DynamicPixelsPerUnit = i1111[10]
  i1110.m_PresetInfoIsWorld = !!i1111[11]
  return i1110
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1113 = data
  i1112.m_IgnoreReversedGraphics = !!i1113[0]
  i1112.m_BlockingObjects = i1113[1]
  i1112.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1113[2] )
  return i1112
}

Deserializers["CurveMove"] = function (request, data, root) {
  var i1114 = root || request.c( 'CurveMove' )
  var i1115 = data
  i1114.speed = i1115[0]
  return i1114
}

Deserializers["Piece"] = function (request, data, root) {
  var i1116 = root || request.c( 'Piece' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'pieceCheckPlaceBoard')
  i1116.isClone = !!i1117[2]
  i1116.CanSeleted = !!i1117[3]
  i1116.possiblePlacementPos = new pc.Vec3( i1117[4], i1117[5], i1117[6] )
  i1116.blockScale = i1117[7]
  i1116.pieceID = i1117[8]
  var i1119 = i1117[9]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('PieceShape', i1119[i + 0]) );
  }
  i1116.pieceShapes = i1118
  var i1121 = i1117[10]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('BlockObj')))
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 1, i1120, '')
  }
  i1116.blockObjs = i1120
  var i1123 = i1117[11]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1116.blocksOnBoard = i1122
  var i1125 = i1117[12]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 1, i1124, '')
  }
  i1116.blocksOnBoardHightLight = i1124
  var i1127 = i1117[13]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(i1127[i + 0]);
  }
  i1116.dstList = i1126
  i1116.color = i1117[14]
  i1116.hexaBlock = !!i1117[15]
  return i1116
}

Deserializers["PieceShape"] = function (request, data, root) {
  var i1130 = root || request.c( 'PieceShape' )
  var i1131 = data
  i1130.shapes = i1131[0]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1137 = data
  i1136.center = new pc.Vec3( i1137[0], i1137[1], i1137[2] )
  i1136.size = new pc.Vec3( i1137[3], i1137[4], i1137[5] )
  i1136.enabled = !!i1137[6]
  i1136.isTrigger = !!i1137[7]
  request.r(i1137[8], i1137[9], 0, i1136, 'material')
  return i1136
}

Deserializers["TutorialPointerBehaviour"] = function (request, data, root) {
  var i1138 = root || request.c( 'TutorialPointerBehaviour' )
  var i1139 = data
  request.r(i1139[0], i1139[1], 0, i1138, 'dragStartTrans')
  request.r(i1139[2], i1139[3], 0, i1138, 'anim')
  i1138.dragAnimLength = i1139[4]
  i1138.offset = new pc.Vec3( i1139[5], i1139[6], i1139[7] )
  var i1141 = i1139[8]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 2, i1140, '')
  }
  i1138.moveableTransforms = i1140
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'animatorController')
  request.r(i1145[2], i1145[3], 0, i1144, 'avatar')
  i1144.updateMode = i1145[4]
  i1144.hasTransformHierarchy = !!i1145[5]
  i1144.applyRootMotion = !!i1145[6]
  var i1147 = i1145[7]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 2, i1146, '')
  }
  i1144.humanBones = i1146
  i1144.enabled = !!i1145[8]
  return i1144
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1149 = data
  i1148.m_Spacing = i1149[0]
  i1148.m_ChildForceExpandWidth = !!i1149[1]
  i1148.m_ChildForceExpandHeight = !!i1149[2]
  i1148.m_ChildControlWidth = !!i1149[3]
  i1148.m_ChildControlHeight = !!i1149[4]
  i1148.m_ChildScaleWidth = !!i1149[5]
  i1148.m_ChildScaleHeight = !!i1149[6]
  i1148.m_ReverseArrangement = !!i1149[7]
  i1148.m_Padding = UnityEngine.RectOffset.FromPaddings(i1149[8], i1149[9], i1149[10], i1149[11])
  i1148.m_ChildAlignment = i1149[12]
  return i1148
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1151 = data
  i1150.m_IgnoreLayout = !!i1151[0]
  i1150.m_MinWidth = i1151[1]
  i1150.m_MinHeight = i1151[2]
  i1150.m_PreferredWidth = i1151[3]
  i1150.m_PreferredHeight = i1151[4]
  i1150.m_FlexibleWidth = i1151[5]
  i1150.m_FlexibleHeight = i1151[6]
  i1150.m_LayoutPriority = i1151[7]
  return i1150
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.UI.Button' )
  var i1153 = data
  i1152.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1153[0], i1152.m_OnClick)
  i1152.m_Navigation = request.d('UnityEngine.UI.Navigation', i1153[1], i1152.m_Navigation)
  i1152.m_Transition = i1153[2]
  i1152.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1153[3], i1152.m_Colors)
  i1152.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1153[4], i1152.m_SpriteState)
  i1152.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1153[5], i1152.m_AnimationTriggers)
  i1152.m_Interactable = !!i1153[6]
  request.r(i1153[7], i1153[8], 0, i1152, 'm_TargetGraphic')
  return i1152
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1155 = data
  i1154.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1155[0], i1154.m_PersistentCalls)
  return i1154
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('UnityEngine.Events.PersistentCall', i1159[i + 0]));
  }
  i1156.m_Calls = i1158
  return i1156
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'm_Target')
  i1162.m_TargetAssemblyTypeName = i1163[2]
  i1162.m_MethodName = i1163[3]
  i1162.m_Mode = i1163[4]
  i1162.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1163[5], i1162.m_Arguments)
  i1162.m_CallState = i1163[6]
  return i1162
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1165 = data
  i1164.m_Mode = i1165[0]
  i1164.m_WrapAround = !!i1165[1]
  request.r(i1165[2], i1165[3], 0, i1164, 'm_SelectOnUp')
  request.r(i1165[4], i1165[5], 0, i1164, 'm_SelectOnDown')
  request.r(i1165[6], i1165[7], 0, i1164, 'm_SelectOnLeft')
  request.r(i1165[8], i1165[9], 0, i1164, 'm_SelectOnRight')
  return i1164
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1167 = data
  i1166.m_NormalColor = new pc.Color(i1167[0], i1167[1], i1167[2], i1167[3])
  i1166.m_HighlightedColor = new pc.Color(i1167[4], i1167[5], i1167[6], i1167[7])
  i1166.m_PressedColor = new pc.Color(i1167[8], i1167[9], i1167[10], i1167[11])
  i1166.m_SelectedColor = new pc.Color(i1167[12], i1167[13], i1167[14], i1167[15])
  i1166.m_DisabledColor = new pc.Color(i1167[16], i1167[17], i1167[18], i1167[19])
  i1166.m_ColorMultiplier = i1167[20]
  i1166.m_FadeDuration = i1167[21]
  return i1166
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'm_HighlightedSprite')
  request.r(i1169[2], i1169[3], 0, i1168, 'm_PressedSprite')
  request.r(i1169[4], i1169[5], 0, i1168, 'm_SelectedSprite')
  request.r(i1169[6], i1169[7], 0, i1168, 'm_DisabledSprite')
  return i1168
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1171 = data
  i1170.m_NormalTrigger = i1171[0]
  i1170.m_HighlightedTrigger = i1171[1]
  i1170.m_PressedTrigger = i1171[2]
  i1170.m_SelectedTrigger = i1171[3]
  i1170.m_DisabledTrigger = i1171[4]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.atlasId = i1173[1]
  i1172.mipmapCount = i1173[2]
  i1172.hdr = !!i1173[3]
  i1172.size = i1173[4]
  i1172.anisoLevel = i1173[5]
  i1172.filterMode = i1173[6]
  var i1175 = i1173[7]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 4) {
    i1174.push( UnityEngine.Rect.MinMaxRect(i1175[i + 0], i1175[i + 1], i1175[i + 2], i1175[i + 3]) );
  }
  i1172.rects = i1174
  i1172.wrapU = i1173[8]
  i1172.wrapV = i1173[9]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.index = i1179[1]
  i1178.startup = !!i1179[2]
  return i1178
}

Deserializers["MenuScreen"] = function (request, data, root) {
  var i1180 = root || request.c( 'MenuScreen' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1180.boardPlaying = i1182
  var i1185 = i1181[1]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 1, i1184, '')
  }
  i1180.gameModeSelectObj = i1184
  var i1187 = i1181[2]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 1, i1186, '')
  }
  i1180.boardsSelected = i1186
  i1180.currentMode = i1181[3]
  i1180.currentBoard = i1181[4]
  i1180.id = i1181[5]
  i1180.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1181[6], i1180.showTransition)
  i1180.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1181[7], i1180.hideTransition)
  return i1180
}

Deserializers["ScreenFrameWork.Screen+TransitionInfo"] = function (request, data, root) {
  var i1190 = root || request.c( 'ScreenFrameWork.Screen+TransitionInfo' )
  var i1191 = data
  i1190.animate = !!i1191[0]
  i1190.animationType = i1191[1]
  i1190.animationDuration = i1191[2]
  i1190.animationStyle = i1191[3]
  i1190.animationCurve = new pc.AnimationCurve( { keys_flow: i1191[4] } )
  i1190.onTransition = request.d('ScreenFrameWork.Screen+OnTransitionEvent', i1191[5], i1190.onTransition)
  return i1190
}

Deserializers["ScreenFrameWork.Screen+OnTransitionEvent"] = function (request, data, root) {
  var i1192 = root || request.c( 'ScreenFrameWork.Screen+OnTransitionEvent' )
  var i1193 = data
  i1192.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1193[0], i1192.m_PersistentCalls)
  return i1192
}

Deserializers["AdjustRectTransformForSafeArea"] = function (request, data, root) {
  var i1194 = root || request.c( 'AdjustRectTransformForSafeArea' )
  var i1195 = data
  i1194.widthScreenSafe = i1195[0]
  i1194.heightScreenSafe = i1195[1]
  i1194.resolution = i1195[2]
  i1194.adjustForBannerAd = !!i1195[3]
  i1194.bannerHeightMobile = i1195[4]
  i1194.bannerHeightLarge2 = i1195[5]
  i1194.bannerHeightTable = i1195[6]
  i1194.ratio = i1195[7]
  i1194.originOffSetMax = new pc.Vec2( i1195[8], i1195[9] )
  i1194.originOffSetMin = new pc.Vec2( i1195[10], i1195[11] )
  i1194.addWidthScreenNormal = i1195[12]
  i1194.addHeightScreenNormal = i1195[13]
  i1194.addWidthScreenRatioLarge2 = i1195[14]
  i1194.addHeightcreenRatioLarge2 = i1195[15]
  i1194.addOffSetMaxLarge2 = new pc.Vec2( i1195[16], i1195[17] )
  i1194.addOffSetMinLarge2 = new pc.Vec2( i1195[18], i1195[19] )
  i1194.addWidthScreenRatioEqual2 = i1195[20]
  i1194.addHeightcreenRatioEqual2 = i1195[21]
  i1194.addOffSetMaxEqual2 = new pc.Vec2( i1195[22], i1195[23] )
  i1194.addOffSetMinEqual2 = new pc.Vec2( i1195[24], i1195[25] )
  i1194.addWidthScreenRatioTablet = i1195[26]
  i1194.addHeightcreenRatioTablet = i1195[27]
  i1194.addOffSetMaxTablet = new pc.Vec2( i1195[28], i1195[29] )
  i1194.addOffSetMinTablet = new pc.Vec2( i1195[30], i1195[31] )
  return i1194
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1197 = data
  i1196.m_Spacing = i1197[0]
  i1196.m_ChildForceExpandWidth = !!i1197[1]
  i1196.m_ChildForceExpandHeight = !!i1197[2]
  i1196.m_ChildControlWidth = !!i1197[3]
  i1196.m_ChildControlHeight = !!i1197[4]
  i1196.m_ChildScaleWidth = !!i1197[5]
  i1196.m_ChildScaleHeight = !!i1197[6]
  i1196.m_ReverseArrangement = !!i1197[7]
  i1196.m_Padding = UnityEngine.RectOffset.FromPaddings(i1197[8], i1197[9], i1197[10], i1197[11])
  i1196.m_ChildAlignment = i1197[12]
  return i1196
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'm_ObjectArgument')
  i1198.m_ObjectArgumentAssemblyTypeName = i1199[2]
  i1198.m_IntArgument = i1199[3]
  i1198.m_FloatArgument = i1199[4]
  i1198.m_StringArgument = i1199[5]
  i1198.m_BoolArgument = !!i1199[6]
  return i1198
}

Deserializers["SoundButton"] = function (request, data, root) {
  var i1200 = root || request.c( 'SoundButton' )
  var i1201 = data
  return i1200
}

Deserializers["LayoutSupportDisplay"] = function (request, data, root) {
  var i1202 = root || request.c( 'LayoutSupportDisplay' )
  var i1203 = data
  i1202.layoutSupportType = i1203[0]
  request.r(i1203[1], i1203[2], 0, i1202, 'rectTarget')
  i1202.layoutNormalRatio = request.d('LayoutSupportDisplay+LayoutValue', i1203[3], i1202.layoutNormalRatio)
  i1202.layoutLarge2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1203[4], i1202.layoutLarge2Ratio)
  i1202.layoutEqual2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i1203[5], i1202.layoutEqual2Ratio)
  i1202.layoutTabletRatio = request.d('LayoutSupportDisplay+LayoutValue', i1203[6], i1202.layoutTabletRatio)
  i1202.layoutGroupNormalRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1203[7], i1202.layoutGroupNormalRatio)
  i1202.layoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1203[8], i1202.layoutGroupLarge2Ratio)
  i1202.layoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1203[9], i1202.layoutGroupEqual2Ratio)
  i1202.layoutGroupTabletRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i1203[10], i1202.layoutGroupTabletRatio)
  i1202.gridLayoutGroupNormalRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1203[11], i1202.gridLayoutGroupNormalRatio)
  i1202.gridLayoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1203[12], i1202.gridLayoutGroupLarge2Ratio)
  i1202.gridLayoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1203[13], i1202.gridLayoutGroupEqual2Ratio)
  i1202.gridLayoutGroupTabletRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i1203[14], i1202.gridLayoutGroupTabletRatio)
  return i1202
}

Deserializers["LayoutSupportDisplay+LayoutValue"] = function (request, data, root) {
  var i1204 = root || request.c( 'LayoutSupportDisplay+LayoutValue' )
  var i1205 = data
  i1204.minWidth = i1205[0]
  i1204.minHeight = i1205[1]
  i1204.useDefaultValue = !!i1205[2]
  i1204.useRateRect = !!i1205[3]
  return i1204
}

Deserializers["LayoutSupportDisplay+HorizontalOrVerticalLayoutValue"] = function (request, data, root) {
  var i1206 = root || request.c( 'LayoutSupportDisplay+HorizontalOrVerticalLayoutValue' )
  var i1207 = data
  i1206.left = i1207[0]
  i1206.right = i1207[1]
  i1206.top = i1207[2]
  i1206.bottom = i1207[3]
  i1206.spacing = i1207[4]
  i1206.useDefaultValue = !!i1207[5]
  return i1206
}

Deserializers["LayoutSupportDisplay+GridLayoutGroupValue"] = function (request, data, root) {
  var i1208 = root || request.c( 'LayoutSupportDisplay+GridLayoutGroupValue' )
  var i1209 = data
  i1208.left = i1209[0]
  i1208.right = i1209[1]
  i1208.top = i1209[2]
  i1208.bottom = i1209[3]
  i1208.cellsize = new pc.Vec2( i1209[4], i1209[5] )
  i1208.spacing = new pc.Vec2( i1209[6], i1209[7] )
  i1208.useDefaultValue = !!i1209[8]
  return i1208
}

Deserializers["UIAnimation"] = function (request, data, root) {
  var i1210 = root || request.c( 'UIAnimation' )
  var i1211 = data
  i1210.id = i1211[0]
  i1210.type = i1211[1]
  i1210.loopType = i1211[2]
  i1210.style = i1211[3]
  i1210.duration = i1211[4]
  i1210.startDelay = i1211[5]
  i1210.startOnFirstFrame = !!i1211[6]
  i1210.useCurrentFrom = !!i1211[7]
  i1210.playOnStart = !!i1211[8]
  i1210.animationCurve = new pc.AnimationCurve( { keys_flow: i1211[9] } )
  i1210.elapsedTime = i1211[10]
  i1210.fromValue = i1211[11]
  i1210.toValue = i1211[12]
  i1210.fromColor = new pc.Color(i1211[13], i1211[14], i1211[15], i1211[16])
  i1210.toColor = new pc.Color(i1211[17], i1211[18], i1211[19], i1211[20])
  return i1210
}

Deserializers["GameScreen"] = function (request, data, root) {
  var i1212 = root || request.c( 'GameScreen' )
  var i1213 = data
  i1212.id = i1213[0]
  i1212.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1213[1], i1212.showTransition)
  i1212.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i1213[2], i1212.hideTransition)
  return i1212
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.UI.Text' )
  var i1215 = data
  i1214.m_FontData = request.d('UnityEngine.UI.FontData', i1215[0], i1214.m_FontData)
  i1214.m_Text = i1215[1]
  request.r(i1215[2], i1215[3], 0, i1214, 'm_Material')
  i1214.m_Maskable = !!i1215[4]
  i1214.m_Color = new pc.Color(i1215[5], i1215[6], i1215[7], i1215[8])
  i1214.m_RaycastTarget = !!i1215[9]
  i1214.m_RaycastPadding = new pc.Vec4( i1215[10], i1215[11], i1215[12], i1215[13] )
  return i1214
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'm_Font')
  i1216.m_FontSize = i1217[2]
  i1216.m_FontStyle = i1217[3]
  i1216.m_BestFit = !!i1217[4]
  i1216.m_MinSize = i1217[5]
  i1216.m_MaxSize = i1217[6]
  i1216.m_Alignment = i1217[7]
  i1216.m_AlignByGeometry = !!i1217[8]
  i1216.m_RichText = !!i1217[9]
  i1216.m_HorizontalOverflow = i1217[10]
  i1216.m_VerticalOverflow = i1217[11]
  i1216.m_LineSpacing = i1217[12]
  return i1216
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i1219 = data
  i1218.m_EffectColor = new pc.Color(i1219[0], i1219[1], i1219[2], i1219[3])
  i1218.m_EffectDistance = new pc.Vec2( i1219[4], i1219[5] )
  i1218.m_UseGraphicAlpha = !!i1219[6]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1221 = data
  i1220.m_Alpha = i1221[0]
  i1220.m_Interactable = !!i1221[1]
  i1220.m_BlocksRaycasts = !!i1221[2]
  i1220.m_IgnoreParentGroups = !!i1221[3]
  i1220.enabled = !!i1221[4]
  return i1220
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1223 = data
  i1222.m_AspectMode = i1223[0]
  i1222.m_AspectRatio = i1223[1]
  return i1222
}

Deserializers["RectTransformByOrientation"] = function (request, data, root) {
  var i1224 = root || request.c( 'RectTransformByOrientation' )
  var i1225 = data
  i1224.portraitScale = new pc.Vec3( i1225[0], i1225[1], i1225[2] )
  i1224.landscapeScale = new pc.Vec3( i1225[3], i1225[4], i1225[5] )
  return i1224
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i1226 = root || request.c( 'DOTWeenPulseAnim' )
  var i1227 = data
  i1226.pulseSize = new pc.Vec2( i1227[0], i1227[1] )
  i1226.pulseDuration = i1227[2]
  i1226.ease = i1227[3]
  return i1226
}

Deserializers["TransformByOrientation"] = function (request, data, root) {
  var i1228 = root || request.c( 'TransformByOrientation' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'portraitTrans')
  request.r(i1229[2], i1229[3], 0, i1228, 'landscapeTrans')
  i1228.tossOut = !!i1229[4]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1231 = data
  i1230.enabled = !!i1231[0]
  i1230.sortingLayerIndex = i1231[1]
  i1230.sortingOrder = i1231[2]
  i1230.sortingLayerName = i1231[3]
  return i1230
}

Deserializers["PopUpFrameWork.Popup"] = function (request, data, root) {
  var i1232 = root || request.c( 'PopUpFrameWork.Popup' )
  var i1233 = data
  i1232.canAndroidBackClosePopup = !!i1233[0]
  i1232.animDuration = i1233[1]
  i1232.animType = i1233[2]
  i1232.animCurve = new pc.AnimationCurve( { keys_flow: i1233[3] } )
  request.r(i1233[4], i1233[5], 0, i1232, 'animContainer')
  return i1232
}

Deserializers["SecondChancePopup"] = function (request, data, root) {
  var i1234 = root || request.c( 'SecondChancePopup' )
  var i1235 = data
  request.r(i1235[0], i1235[1], 0, i1234, 'durationText')
  request.r(i1235[2], i1235[3], 0, i1234, 'popupSecondChance')
  request.r(i1235[4], i1235[5], 0, i1234, 'fillSecondChance')
  i1234.canAndroidBackClosePopup = !!i1235[6]
  i1234.animDuration = i1235[7]
  i1234.animType = i1235[8]
  i1234.animCurve = new pc.AnimationCurve( { keys_flow: i1235[9] } )
  request.r(i1235[10], i1235[11], 0, i1234, 'animContainer')
  return i1234
}

Deserializers["SettingPopup"] = function (request, data, root) {
  var i1236 = root || request.c( 'SettingPopup' )
  var i1237 = data
  request.r(i1237[0], i1237[1], 0, i1236, 'on')
  request.r(i1237[2], i1237[3], 0, i1236, 'off')
  request.r(i1237[4], i1237[5], 0, i1236, 'musicIcon')
  request.r(i1237[6], i1237[7], 0, i1236, 'soundIcon')
  i1236.rateURL = i1237[8]
  i1236.canAndroidBackClosePopup = !!i1237[9]
  i1236.animDuration = i1237[10]
  i1236.animType = i1237[11]
  i1236.animCurve = new pc.AnimationCurve( { keys_flow: i1237[12] } )
  request.r(i1237[13], i1237[14], 0, i1236, 'animContainer')
  return i1236
}

Deserializers["GameOverPopup"] = function (request, data, root) {
  var i1238 = root || request.c( 'GameOverPopup' )
  var i1239 = data
  request.r(i1239[0], i1239[1], 0, i1238, 'scoreText')
  request.r(i1239[2], i1239[3], 0, i1238, 'bestScoreText')
  i1238.canAndroidBackClosePopup = !!i1239[4]
  i1238.animDuration = i1239[5]
  i1238.animType = i1239[6]
  i1238.animCurve = new pc.AnimationCurve( { keys_flow: i1239[7] } )
  request.r(i1239[8], i1239[9], 0, i1238, 'animContainer')
  return i1238
}

Deserializers["FadeOutCanvasGroup"] = function (request, data, root) {
  var i1240 = root || request.c( 'FadeOutCanvasGroup' )
  var i1241 = data
  request.r(i1241[0], i1241[1], 0, i1240, 'canvasGroup')
  i1240.fadeOutTime = i1241[2]
  i1240.deactivateOnFinish = !!i1241[3]
  i1240.fadeInOnActivation = !!i1241[4]
  return i1240
}

Deserializers["UnityEventOnEnable"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEventOnEnable' )
  var i1243 = data
  i1242.events = request.d('UnityEngine.Events.UnityEvent', i1243[0], i1242.events)
  return i1242
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1245 = data
  i1244.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1245[0], i1244.m_PersistentCalls)
  return i1244
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'm_FirstSelected')
  i1246.m_sendNavigationEvents = !!i1247[2]
  i1246.m_DragThreshold = i1247[3]
  return i1246
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1249 = data
  i1248.m_HorizontalAxis = i1249[0]
  i1248.m_VerticalAxis = i1249[1]
  i1248.m_SubmitButton = i1249[2]
  i1248.m_CancelButton = i1249[3]
  i1248.m_InputActionsPerSecond = i1249[4]
  i1248.m_RepeatDelay = i1249[5]
  i1248.m_ForceModuleActive = !!i1249[6]
  i1248.m_SendPointerHoverToParent = !!i1249[7]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1251 = data
  i1250.enabled = !!i1251[0]
  i1250.aspect = i1251[1]
  i1250.orthographic = !!i1251[2]
  i1250.orthographicSize = i1251[3]
  i1250.backgroundColor = new pc.Color(i1251[4], i1251[5], i1251[6], i1251[7])
  i1250.nearClipPlane = i1251[8]
  i1250.farClipPlane = i1251[9]
  i1250.fieldOfView = i1251[10]
  i1250.depth = i1251[11]
  i1250.clearFlags = i1251[12]
  i1250.cullingMask = i1251[13]
  i1250.rect = i1251[14]
  request.r(i1251[15], i1251[16], 0, i1250, 'targetTexture')
  i1250.usePhysicalProperties = !!i1251[17]
  i1250.focalLength = i1251[18]
  i1250.sensorSize = new pc.Vec2( i1251[19], i1251[20] )
  i1250.lensShift = new pc.Vec2( i1251[21], i1251[22] )
  i1250.gateFit = i1251[23]
  return i1250
}

Deserializers["CameraSizeByResolution"] = function (request, data, root) {
  var i1252 = root || request.c( 'CameraSizeByResolution' )
  var i1253 = data
  i1252.DebugUpdateCam = !!i1253[0]
  i1252.referencePortraitResolution = new pc.Vec2( i1253[1], i1253[2] )
  i1252.portraitTargetSize = i1253[3]
  i1252.landscapeTargetSize = i1253[4]
  return i1252
}

Deserializers["PlayingManager"] = function (request, data, root) {
  var i1254 = root || request.c( 'PlayingManager' )
  var i1255 = data
  i1254.CanClickPiece = !!i1255[0]
  i1254.playableLengthConfig = i1255[1]
  i1254.playableStageConfig = i1255[2]
  i1254.currentGameState = i1255[3]
  request.r(i1255[4], i1255[5], 0, i1254, 'boardClassic8x8')
  request.r(i1255[6], i1255[7], 0, i1254, 'boardClassic10x10')
  request.r(i1255[8], i1255[9], 0, i1254, 'boardHexa')
  request.r(i1255[10], i1255[11], 0, i1254, 'currentBoard')
  request.r(i1255[12], i1255[13], 0, i1254, 'fakeStageContinuation')
  request.r(i1255[14], i1255[15], 0, i1254, 'stageBG')
  return i1254
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i1256 = root || request.c( 'BoosterManager' )
  var i1257 = data
  i1256.boosterType = i1257[0]
  var i1259 = i1257[1]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterManager+HintInfor')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('BoosterManager+HintInfor', i1259[i + 0]));
  }
  i1256.hintInfors = i1258
  request.r(i1257[2], i1257[3], 0, i1256, 'textBoosterOneBlock')
  request.r(i1257[4], i1257[5], 0, i1256, 'textBoosterOneHorizontal')
  request.r(i1257[6], i1257[7], 0, i1256, 'textBoosterOneVertical')
  request.r(i1257[8], i1257[9], 0, i1256, 'textBoosterBack')
  var i1261 = i1257[10]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 2, i1260, '')
  }
  i1256.rectButtonsBooster = i1260
  request.r(i1257[11], i1257[12], 0, i1256, 'hammerObj')
  request.r(i1257[13], i1257[14], 0, i1256, 'hammerAnimation')
  i1256.testMode = !!i1257[15]
  return i1256
}

Deserializers["BoosterManager+HintInfor"] = function (request, data, root) {
  var i1264 = root || request.c( 'BoosterManager+HintInfor' )
  var i1265 = data
  i1264.boosterType = i1265[0]
  i1264.start = i1265[1]
  i1264.current = i1265[2]
  i1264.adsCanGet = i1265[3]
  return i1264
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1268 = root || request.c( 'TutorialManager' )
  var i1269 = data
  request.r(i1269[0], i1269[1], 0, i1268, 'handObject')
  i1268.from = new pc.Vec3( i1269[2], i1269[3], i1269[4] )
  i1268.to = new pc.Vec3( i1269[5], i1269[6], i1269[7] )
  i1268.isUpdate = !!i1269[8]
  request.r(i1269[9], i1269[10], 0, i1268, 'highLightPiecePlace')
  i1268.smoothSpeed = i1269[11]
  var i1271 = i1269[12]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 1, i1270, '')
  }
  i1268.tutorialBoardDatasClassic = i1270
  var i1273 = i1269[13]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 1, i1272, '')
  }
  i1268.tutorialBoardDatasClassic10x10 = i1272
  var i1275 = i1269[14]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 1, i1274, '')
  }
  i1268.tutorialBoardDatasHexa = i1274
  request.r(i1269[15], i1269[16], 0, i1268, 'popupCanvas')
  request.r(i1269[17], i1269[18], 0, i1268, 'fadePopup')
  i1268.layerPopupTutorial = i1269[19]
  return i1268
}

Deserializers["TutorialBoardData"] = function (request, data, root) {
  var i1278 = root || request.c( 'TutorialBoardData' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'boardTutorial')
  var i1281 = i1279[2]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(!!i1281[i + 0]);
  }
  i1278.tutorialData = i1280
  request.r(i1279[3], i1279[4], 0, i1278, 'targetHand')
  request.r(i1279[5], i1279[6], 0, i1278, 'beginHand')
  i1278.piecesID = i1279[7]
  var i1283 = i1279[8]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i1283.length; i += 2) {
  request.r(i1283[i + 0], i1283[i + 1], 1, i1282, '')
  }
  i1278.blocksBoardCanPlace = i1282
  return i1278
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1284 = root || request.c( 'CameraController' )
  var i1285 = data
  i1284.doCameraZoom = !!i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'csr')
  i1284.cameraZoomLevels = i1285[3]
  i1284.landscapeOffset = i1285[4]
  i1284.zoomOutDuration = i1285[5]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'clip')
  request.r(i1287[2], i1287[3], 0, i1286, 'outputAudioMixerGroup')
  i1286.playOnAwake = !!i1287[4]
  i1286.loop = !!i1287[5]
  i1286.time = i1287[6]
  i1286.volume = i1287[7]
  i1286.pitch = i1287[8]
  i1286.enabled = !!i1287[9]
  return i1286
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i1288 = root || request.c( 'SoundManager' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('SoundClipInfor')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('SoundClipInfor', i1291[i + 0]));
  }
  i1288.soundClipInfors = i1290
  request.r(i1289[1], i1289[2], 0, i1288, 'musicSource')
  request.r(i1289[3], i1289[4], 0, i1288, 'soundSource')
  request.r(i1289[5], i1289[6], 0, i1288, 'countLoop')
  return i1288
}

Deserializers["SoundClipInfor"] = function (request, data, root) {
  var i1294 = root || request.c( 'SoundClipInfor' )
  var i1295 = data
  i1294.id = i1295[0]
  request.r(i1295[1], i1295[2], 0, i1294, 'audioClip')
  i1294.clipVolume = i1295[3]
  return i1294
}

Deserializers["ScreenFrameWork.ScreenManager"] = function (request, data, root) {
  var i1296 = root || request.c( 'ScreenFrameWork.ScreenManager' )
  var i1297 = data
  i1296.homeScreenId = i1297[0]
  var i1299 = i1297[1]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenFrameWork.Screen')))
  for(var i = 0; i < i1299.length; i += 2) {
  request.r(i1299[i + 0], i1299[i + 1], 1, i1298, '')
  }
  i1296.screens = i1298
  var i1301 = i1297[2]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(i1301[i + 0]);
  }
  i1296.backStack = i1300
  return i1296
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1306 = root || request.c( 'GameManager' )
  var i1307 = data
  i1306.SCORE_ONE_BLOCK = i1307[0]
  i1306.SCORE_DESTROY_ONE_BLOCK = i1307[1]
  i1306.CurrentDataGameMode = i1307[2]
  request.r(i1307[3], i1307[4], 0, i1306, 'bestScoreText')
  request.r(i1307[5], i1307[6], 0, i1306, 'currentScoreText')
  i1306.boardType = i1307[7]
  i1306.gameMode = i1307[8]
  var i1309 = i1307[9]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 1, i1308, '')
  }
  i1306.buttonsInGame = i1308
  i1306.dataInGame = request.d('DataInGame', i1307[10], i1306.dataInGame)
  i1306.gameSetting = request.d('GameSetting', i1307[11], i1306.gameSetting)
  i1306.rateURL = i1307[12]
  request.r(i1307[13], i1307[14], 0, i1306, 'retryWindow')
  return i1306
}

Deserializers["DataInGame"] = function (request, data, root) {
  var i1312 = root || request.c( 'DataInGame' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('DataMode')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('DataMode', i1315[i + 0]));
  }
  i1312.dataGameModes = i1314
  i1312.jsonGameMode = i1313[1]
  return i1312
}

Deserializers["DataMode"] = function (request, data, root) {
  var i1318 = root || request.c( 'DataMode' )
  var i1319 = data
  i1318.dataGameMode = i1319[0]
  i1318.currentScore = i1319[1]
  i1318.bestScore = i1319[2]
  var i1321 = i1319[3]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('DataPlacePiece')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('DataPlacePiece', i1321[i + 0]));
  }
  i1318.dataPlacePieces = i1320
  var i1323 = i1319[4]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(i1323[i + 0]);
  }
  i1318.blocksModeIndex = i1322
  i1318.piecesId = i1319[5]
  var i1325 = i1319[6]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('BombDetail')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('BombDetail', i1325[i + 0]));
  }
  i1318.bombDetails = i1324
  i1318.stepBomb = i1319[7]
  i1318.jsonPlacePieces = i1319[8]
  return i1318
}

Deserializers["GameSetting"] = function (request, data, root) {
  var i1326 = root || request.c( 'GameSetting' )
  var i1327 = data
  i1326.muteMusic = !!i1327[0]
  i1326.muteSound = !!i1327[1]
  i1326.tutorialClassic = !!i1327[2]
  i1326.tutorialHexa = !!i1327[3]
  i1326.fillTimer = i1327[4]
  return i1326
}

Deserializers["PrefabsManager"] = function (request, data, root) {
  var i1328 = root || request.c( 'PrefabsManager' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'blockPrefab')
  request.r(i1329[2], i1329[3], 0, i1328, 'blockHexaPrefab')
  request.r(i1329[4], i1329[5], 0, i1328, 'effDestroyBlockPrefab')
  request.r(i1329[6], i1329[7], 0, i1328, 'effDestroyBlockHexaPrefab')
  request.r(i1329[8], i1329[9], 0, i1328, 'swordPrefab')
  request.r(i1329[10], i1329[11], 0, i1328, 'scoreTextEffect')
  request.r(i1329[12], i1329[13], 0, i1328, 'arrowPrefab')
  request.r(i1329[14], i1329[15], 0, i1328, 'bombItemPrefab')
  request.r(i1329[16], i1329[17], 0, i1328, 'effectTime')
  var i1331 = i1329[18]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 1, i1330, '')
  }
  i1328.piecesClassicPrefab = i1330
  var i1333 = i1329[19]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1328.piecesHexaPrefab = i1332
  request.r(i1329[20], i1329[21], 0, i1328, 'piecesContainer')
  request.r(i1329[22], i1329[23], 0, i1328, 'piecesHexaContainer')
  i1328.scalePiece = i1329[24]
  return i1328
}

Deserializers["PieceManager"] = function (request, data, root) {
  var i1336 = root || request.c( 'PieceManager' )
  var i1337 = data
  var i1339 = i1337[0]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 1, i1338, '')
  }
  i1336.pointsPlaceBlock = i1338
  request.r(i1337[1], i1337[2], 0, i1336, 'pointsPlaceNextBlock')
  var i1341 = i1337[3]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1341.length; i += 2) {
  request.r(i1341[i + 0], i1341[i + 1], 1, i1340, '')
  }
  i1336.pieces = i1340
  var i1343 = i1337[4]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 2, i1342, '')
  }
  i1336.piecesInGame = i1342
  request.r(i1337[5], i1337[6], 0, i1336, 'tutorialPointer')
  var i1345 = i1337[7]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(i1345[i + 0]);
  }
  i1336.predeterminedPieces = i1344
  i1336.idleTimeBeforeTutorial = i1337[8]
  request.r(i1337[9], i1337[10], 0, i1336, 'tutorialText')
  return i1336
}

Deserializers["EffectManager"] = function (request, data, root) {
  var i1352 = root || request.c( 'EffectManager' )
  var i1353 = data
  return i1352
}

Deserializers["PopUpFrameWork.PopupManager"] = function (request, data, root) {
  var i1354 = root || request.c( 'PopUpFrameWork.PopupManager' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('PopUpFrameWork.PopupManager+PopupInfo')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('PopUpFrameWork.PopupManager+PopupInfo', i1357[i + 0]));
  }
  i1354.popupInfos = i1356
  return i1354
}

Deserializers["PopUpFrameWork.PopupManager+PopupInfo"] = function (request, data, root) {
  var i1360 = root || request.c( 'PopUpFrameWork.PopupManager+PopupInfo' )
  var i1361 = data
  i1360.popupId = i1361[0]
  request.r(i1361[1], i1361[2], 0, i1360, 'popup')
  return i1360
}

Deserializers["SpriteManager"] = function (request, data, root) {
  var i1362 = root || request.c( 'SpriteManager' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 1, i1364, '')
  }
  i1362.blocksContainer3D = i1364
  var i1367 = i1363[1]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1367.length; i += 2) {
  request.r(i1367[i + 0], i1367[i + 1], 1, i1366, '')
  }
  i1362.blocksContainer2D = i1366
  var i1369 = i1363[2]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1369.length; i += 2) {
  request.r(i1369[i + 0], i1369[i + 1], 1, i1368, '')
  }
  i1362.blockShow2D = i1368
  var i1371 = i1363[3]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1371.length; i += 2) {
  request.r(i1371[i + 0], i1371[i + 1], 1, i1370, '')
  }
  i1362.blockShow3D = i1370
  var i1373 = i1363[4]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1373.length; i += 2) {
  request.r(i1373[i + 0], i1373[i + 1], 1, i1372, '')
  }
  i1362.textEffects = i1372
  var i1375 = i1363[5]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 2) {
  request.r(i1375[i + 0], i1375[i + 1], 2, i1374, '')
  }
  i1362.blockColorSprites = i1374
  var i1377 = i1363[6]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 2) {
  request.r(i1377[i + 0], i1377[i + 1], 2, i1376, '')
  }
  i1362.blockGemSprites = i1376
  return i1362
}

Deserializers["BombMode"] = function (request, data, root) {
  var i1380 = root || request.c( 'BombMode' )
  var i1381 = data
  i1380.gameMode = i1381[0]
  var i1383 = i1381[1]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 1, i1382, '')
  }
  i1380.objsUsedInMode = i1382
  var i1385 = i1381[2]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('BombItem')))
  for(var i = 0; i < i1385.length; i += 2) {
  request.r(i1385[i + 0], i1385[i + 1], 1, i1384, '')
  }
  i1380.bombItems = i1384
  return i1380
}

Deserializers["TimeMode"] = function (request, data, root) {
  var i1388 = root || request.c( 'TimeMode' )
  var i1389 = data
  i1388.gameMode = i1389[0]
  request.r(i1389[1], i1389[2], 0, i1388, 'processTime')
  request.r(i1389[3], i1389[4], 0, i1388, 'iconTime')
  var i1391 = i1389[5]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 1, i1390, '')
  }
  i1388.objsUsedInMode = i1390
  return i1388
}

Deserializers["EmptyMode"] = function (request, data, root) {
  var i1392 = root || request.c( 'EmptyMode' )
  var i1393 = data
  i1392.gameMode = i1393[0]
  var i1395 = i1393[1]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1395.length; i += 2) {
  request.r(i1395[i + 0], i1395[i + 1], 1, i1394, '')
  }
  i1392.objsUsedInMode = i1394
  return i1392
}

Deserializers["OrientationManager"] = function (request, data, root) {
  var i1396 = root || request.c( 'OrientationManager' )
  var i1397 = data
  return i1396
}

Deserializers["BlockColorApplier"] = function (request, data, root) {
  var i1398 = root || request.c( 'BlockColorApplier' )
  var i1399 = data
  i1398.rayLength = i1399[0]
  i1398.rayDirection = new pc.Vec2( i1399[1], i1399[2] )
  i1398.targetTag = i1399[3]
  i1398.currentColor = i1399[4]
  i1398.currentGemColor = i1399[5]
  var i1401 = i1399[6]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 2) {
  request.r(i1401[i + 0], i1401[i + 1], 2, i1400, '')
  }
  i1398.previewBlocks = i1400
  var i1403 = i1399[7]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 2) {
  request.r(i1403[i + 0], i1403[i + 1], 2, i1402, '')
  }
  i1398.previewGemBlocks = i1402
  return i1398
}

Deserializers["FPSController"] = function (request, data, root) {
  var i1406 = root || request.c( 'FPSController' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'fpsText')
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1409 = data
  request.r(i1409[0], i1409[1], 0, i1408, 'additionalVertexStreams')
  i1408.enabled = !!i1409[2]
  request.r(i1409[3], i1409[4], 0, i1408, 'sharedMaterial')
  var i1411 = i1409[5]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 2) {
  request.r(i1411[i + 0], i1411[i + 1], 2, i1410, '')
  }
  i1408.sharedMaterials = i1410
  i1408.receiveShadows = !!i1409[6]
  i1408.shadowCastingMode = i1409[7]
  i1408.sortingLayerID = i1409[8]
  i1408.sortingOrder = i1409[9]
  i1408.lightmapIndex = i1409[10]
  i1408.lightmapSceneIndex = i1409[11]
  i1408.lightmapScaleOffset = new pc.Vec4( i1409[12], i1409[13], i1409[14], i1409[15] )
  i1408.lightProbeUsage = i1409[16]
  i1408.reflectionProbeUsage = i1409[17]
  return i1408
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.TextMeshPro' )
  var i1413 = data
  i1412._SortingLayer = i1413[0]
  i1412._SortingLayerID = i1413[1]
  i1412._SortingOrder = i1413[2]
  i1412.m_hasFontAssetChanged = !!i1413[3]
  request.r(i1413[4], i1413[5], 0, i1412, 'm_renderer')
  i1412.m_maskType = i1413[6]
  i1412.m_text = i1413[7]
  i1412.m_isRightToLeft = !!i1413[8]
  request.r(i1413[9], i1413[10], 0, i1412, 'm_fontAsset')
  request.r(i1413[11], i1413[12], 0, i1412, 'm_sharedMaterial')
  var i1415 = i1413[13]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 2, i1414, '')
  }
  i1412.m_fontSharedMaterials = i1414
  request.r(i1413[14], i1413[15], 0, i1412, 'm_fontMaterial')
  var i1417 = i1413[16]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 2) {
  request.r(i1417[i + 0], i1417[i + 1], 2, i1416, '')
  }
  i1412.m_fontMaterials = i1416
  i1412.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1413[17], i1413[18], i1413[19], i1413[20])
  i1412.m_fontColor = new pc.Color(i1413[21], i1413[22], i1413[23], i1413[24])
  i1412.m_enableVertexGradient = !!i1413[25]
  i1412.m_colorMode = i1413[26]
  i1412.m_fontColorGradient = request.d('TMPro.VertexGradient', i1413[27], i1412.m_fontColorGradient)
  request.r(i1413[28], i1413[29], 0, i1412, 'm_fontColorGradientPreset')
  request.r(i1413[30], i1413[31], 0, i1412, 'm_spriteAsset')
  i1412.m_tintAllSprites = !!i1413[32]
  request.r(i1413[33], i1413[34], 0, i1412, 'm_StyleSheet')
  i1412.m_TextStyleHashCode = i1413[35]
  i1412.m_overrideHtmlColors = !!i1413[36]
  i1412.m_faceColor = UnityEngine.Color32.ConstructColor(i1413[37], i1413[38], i1413[39], i1413[40])
  i1412.m_fontSize = i1413[41]
  i1412.m_fontSizeBase = i1413[42]
  i1412.m_fontWeight = i1413[43]
  i1412.m_enableAutoSizing = !!i1413[44]
  i1412.m_fontSizeMin = i1413[45]
  i1412.m_fontSizeMax = i1413[46]
  i1412.m_fontStyle = i1413[47]
  i1412.m_HorizontalAlignment = i1413[48]
  i1412.m_VerticalAlignment = i1413[49]
  i1412.m_textAlignment = i1413[50]
  i1412.m_characterSpacing = i1413[51]
  i1412.m_wordSpacing = i1413[52]
  i1412.m_lineSpacing = i1413[53]
  i1412.m_lineSpacingMax = i1413[54]
  i1412.m_paragraphSpacing = i1413[55]
  i1412.m_charWidthMaxAdj = i1413[56]
  i1412.m_enableWordWrapping = !!i1413[57]
  i1412.m_wordWrappingRatios = i1413[58]
  i1412.m_overflowMode = i1413[59]
  request.r(i1413[60], i1413[61], 0, i1412, 'm_linkedTextComponent')
  request.r(i1413[62], i1413[63], 0, i1412, 'parentLinkedComponent')
  i1412.m_enableKerning = !!i1413[64]
  i1412.m_enableExtraPadding = !!i1413[65]
  i1412.checkPaddingRequired = !!i1413[66]
  i1412.m_isRichText = !!i1413[67]
  i1412.m_parseCtrlCharacters = !!i1413[68]
  i1412.m_isOrthographic = !!i1413[69]
  i1412.m_isCullingEnabled = !!i1413[70]
  i1412.m_horizontalMapping = i1413[71]
  i1412.m_verticalMapping = i1413[72]
  i1412.m_uvLineOffset = i1413[73]
  i1412.m_geometrySortingOrder = i1413[74]
  i1412.m_IsTextObjectScaleStatic = !!i1413[75]
  i1412.m_VertexBufferAutoSizeReduction = !!i1413[76]
  i1412.m_useMaxVisibleDescender = !!i1413[77]
  i1412.m_pageToDisplay = i1413[78]
  i1412.m_margin = new pc.Vec4( i1413[79], i1413[80], i1413[81], i1413[82] )
  i1412.m_isUsingLegacyAnimationComponent = !!i1413[83]
  i1412.m_isVolumetricText = !!i1413[84]
  request.r(i1413[85], i1413[86], 0, i1412, 'm_Material')
  i1412.m_Maskable = !!i1413[87]
  i1412.m_Color = new pc.Color(i1413[88], i1413[89], i1413[90], i1413[91])
  i1412.m_RaycastTarget = !!i1413[92]
  i1412.m_RaycastPadding = new pc.Vec4( i1413[93], i1413[94], i1413[95], i1413[96] )
  return i1412
}

Deserializers["RestartStage"] = function (request, data, root) {
  var i1418 = root || request.c( 'RestartStage' )
  var i1419 = data
  return i1418
}

Deserializers["EndcardManagement"] = function (request, data, root) {
  var i1420 = root || request.c( 'EndcardManagement' )
  var i1421 = data
  request.r(i1421[0], i1421[1], 0, i1420, 'endcard')
  i1420.automaticRedirectTimeWindow = i1421[2]
  i1420.autoRedirectEndcard = !!i1421[3]
  i1420.configName = i1421[4]
  return i1420
}

Deserializers["ParticleEffectManager"] = function (request, data, root) {
  var i1422 = root || request.c( 'ParticleEffectManager' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'dustPrefab')
  request.r(i1423[2], i1423[3], 0, i1422, 'blockPlacePrefab')
  i1422.initialPoolSize = i1423[4]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1425 = data
  i1424.ambientIntensity = i1425[0]
  i1424.reflectionIntensity = i1425[1]
  i1424.ambientMode = i1425[2]
  i1424.ambientLight = new pc.Color(i1425[3], i1425[4], i1425[5], i1425[6])
  i1424.ambientSkyColor = new pc.Color(i1425[7], i1425[8], i1425[9], i1425[10])
  i1424.ambientGroundColor = new pc.Color(i1425[11], i1425[12], i1425[13], i1425[14])
  i1424.ambientEquatorColor = new pc.Color(i1425[15], i1425[16], i1425[17], i1425[18])
  i1424.fogColor = new pc.Color(i1425[19], i1425[20], i1425[21], i1425[22])
  i1424.fogEndDistance = i1425[23]
  i1424.fogStartDistance = i1425[24]
  i1424.fogDensity = i1425[25]
  i1424.fog = !!i1425[26]
  request.r(i1425[27], i1425[28], 0, i1424, 'skybox')
  i1424.fogMode = i1425[29]
  var i1427 = i1425[30]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1427[i + 0]) );
  }
  i1424.lightmaps = i1426
  i1424.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1425[31], i1424.lightProbes)
  i1424.lightmapsMode = i1425[32]
  i1424.mixedBakeMode = i1425[33]
  i1424.environmentLightingMode = i1425[34]
  i1424.ambientProbe = new pc.SphericalHarmonicsL2(i1425[35])
  i1424.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1425[36])
  i1424.useReferenceAmbientProbe = !!i1425[37]
  request.r(i1425[38], i1425[39], 0, i1424, 'customReflection')
  request.r(i1425[40], i1425[41], 0, i1424, 'defaultReflection')
  i1424.defaultReflectionMode = i1425[42]
  i1424.defaultReflectionResolution = i1425[43]
  i1424.sunLightObjectId = i1425[44]
  i1424.pixelLightCount = i1425[45]
  i1424.defaultReflectionHDR = !!i1425[46]
  i1424.hasLightDataAsset = !!i1425[47]
  i1424.hasManualGenerate = !!i1425[48]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1431 = data
  request.r(i1431[0], i1431[1], 0, i1430, 'lightmapColor')
  request.r(i1431[2], i1431[3], 0, i1430, 'lightmapDirection')
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1432 = root || new UnityEngine.LightProbes()
  var i1433 = data
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1441 = data
  var i1443 = i1441[0]
  var i1442 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1443[i + 0]));
  }
  i1440.ShaderCompilationErrors = i1442
  i1440.name = i1441[1]
  i1440.guid = i1441[2]
  var i1445 = i1441[3]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( i1445[i + 0] );
  }
  i1440.shaderDefinedKeywords = i1444
  var i1447 = i1441[4]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1447[i + 0]) );
  }
  i1440.passes = i1446
  var i1449 = i1441[5]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1449[i + 0]) );
  }
  i1440.usePasses = i1448
  var i1451 = i1441[6]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1451[i + 0]) );
  }
  i1440.defaultParameterValues = i1450
  request.r(i1441[7], i1441[8], 0, i1440, 'unityFallbackShader')
  i1440.readDepth = !!i1441[9]
  i1440.isCreatedByShaderGraph = !!i1441[10]
  i1440.usedBatchUniforms = i1441[11]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1455 = data
  i1454.shaderName = i1455[0]
  i1454.errorMessage = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1460 = root || new pc.UnityShaderPass()
  var i1461 = data
  i1460.id = i1461[0]
  i1460.subShaderIndex = i1461[1]
  i1460.name = i1461[2]
  i1460.passType = i1461[3]
  i1460.grabPassTextureName = i1461[4]
  i1460.usePass = !!i1461[5]
  i1460.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[6], i1460.zTest)
  i1460.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[7], i1460.zWrite)
  i1460.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[8], i1460.culling)
  i1460.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1461[9], i1460.blending)
  i1460.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1461[10], i1460.alphaBlending)
  i1460.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[11], i1460.colorWriteMask)
  i1460.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[12], i1460.offsetUnits)
  i1460.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[13], i1460.offsetFactor)
  i1460.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[14], i1460.stencilRef)
  i1460.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[15], i1460.stencilReadMask)
  i1460.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[16], i1460.stencilWriteMask)
  i1460.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1461[17], i1460.stencilOp)
  i1460.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1461[18], i1460.stencilOpFront)
  i1460.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1461[19], i1460.stencilOpBack)
  var i1463 = i1461[20]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1463[i + 0]) );
  }
  i1460.tags = i1462
  var i1465 = i1461[21]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( i1465[i + 0] );
  }
  i1460.passDefinedKeywords = i1464
  var i1467 = i1461[22]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1467[i + 0]) );
  }
  i1460.passDefinedKeywordGroups = i1466
  var i1469 = i1461[23]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1469[i + 0]) );
  }
  i1460.variants = i1468
  var i1471 = i1461[24]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1471[i + 0]) );
  }
  i1460.excludedVariants = i1470
  i1460.hasDepthReader = !!i1461[25]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1473 = data
  i1472.val = i1473[0]
  i1472.name = i1473[1]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1475 = data
  i1474.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[0], i1474.src)
  i1474.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[1], i1474.dst)
  i1474.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1475[2], i1474.op)
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1477 = data
  i1476.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[0], i1476.pass)
  i1476.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[1], i1476.fail)
  i1476.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[2], i1476.zFail)
  i1476.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[3], i1476.comp)
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1481 = data
  i1480.name = i1481[0]
  i1480.value = i1481[1]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1485 = data
  var i1487 = i1485[0]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( i1487[i + 0] );
  }
  i1484.keywords = i1486
  i1484.hasDiscard = !!i1485[1]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1491 = data
  i1490.passId = i1491[0]
  i1490.subShaderIndex = i1491[1]
  var i1493 = i1491[2]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( i1493[i + 0] );
  }
  i1490.keywords = i1492
  i1490.vertexProgram = i1491[3]
  i1490.fragmentProgram = i1491[4]
  i1490.compiledForWebGL2 = !!i1491[5]
  i1490.readDepth = !!i1491[6]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1497 = data
  request.r(i1497[0], i1497[1], 0, i1496, 'shader')
  i1496.pass = i1497[2]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1501 = data
  i1500.name = i1501[0]
  i1500.type = i1501[1]
  i1500.value = new pc.Vec4( i1501[2], i1501[3], i1501[4], i1501[5] )
  i1500.textureValue = i1501[6]
  i1500.shaderPropertyFlag = i1501[7]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1503 = data
  i1502.name = i1503[0]
  request.r(i1503[1], i1503[2], 0, i1502, 'texture')
  i1502.aabb = i1503[3]
  i1502.vertices = i1503[4]
  i1502.triangles = i1503[5]
  i1502.textureRect = UnityEngine.Rect.MinMaxRect(i1503[6], i1503[7], i1503[8], i1503[9])
  i1502.packedRect = UnityEngine.Rect.MinMaxRect(i1503[10], i1503[11], i1503[12], i1503[13])
  i1502.border = new pc.Vec4( i1503[14], i1503[15], i1503[16], i1503[17] )
  i1502.transparency = i1503[18]
  i1502.bounds = i1503[19]
  i1502.pixelsPerUnit = i1503[20]
  i1502.textureWidth = i1503[21]
  i1502.textureHeight = i1503[22]
  i1502.nativeSize = new pc.Vec2( i1503[23], i1503[24] )
  i1502.pivot = new pc.Vec2( i1503[25], i1503[26] )
  i1502.textureRectOffset = new pc.Vec2( i1503[27], i1503[28] )
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1505 = data
  i1504.name = i1505[0]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.wrapMode = i1507[1]
  i1506.isLooping = !!i1507[2]
  i1506.length = i1507[3]
  var i1509 = i1507[4]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1509[i + 0]) );
  }
  i1506.curves = i1508
  var i1511 = i1507[5]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1511[i + 0]) );
  }
  i1506.events = i1510
  i1506.halfPrecision = !!i1507[6]
  i1506._frameRate = i1507[7]
  i1506.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1507[8], i1506.localBounds)
  i1506.hasMuscleCurves = !!i1507[9]
  var i1513 = i1507[10]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( i1513[i + 0] );
  }
  i1506.clipMuscleConstant = i1512
  i1506.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1507[11], i1506.clipBindingConstant)
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1517 = data
  i1516.path = i1517[0]
  i1516.hash = i1517[1]
  i1516.componentType = i1517[2]
  i1516.property = i1517[3]
  i1516.keys = i1517[4]
  var i1519 = i1517[5]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1519[i + 0]) );
  }
  i1516.objectReferenceKeys = i1518
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1523 = data
  i1522.time = i1523[0]
  request.r(i1523[1], i1523[2], 0, i1522, 'value')
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1527 = data
  i1526.functionName = i1527[0]
  i1526.floatParameter = i1527[1]
  i1526.intParameter = i1527[2]
  i1526.stringParameter = i1527[3]
  request.r(i1527[4], i1527[5], 0, i1526, 'objectReferenceParameter')
  i1526.time = i1527[6]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1529 = data
  i1528.center = new pc.Vec3( i1529[0], i1529[1], i1529[2] )
  i1528.extends = new pc.Vec3( i1529[3], i1529[4], i1529[5] )
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1533 = data
  var i1535 = i1533[0]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( i1535[i + 0] );
  }
  i1532.genericBindings = i1534
  var i1537 = i1533[1]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( i1537[i + 0] );
  }
  i1532.pptrCurveMapping = i1536
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1539 = data
  i1538.name = i1539[0]
  i1538.ascent = i1539[1]
  i1538.originalLineHeight = i1539[2]
  i1538.fontSize = i1539[3]
  var i1541 = i1539[4]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1541[i + 0]) );
  }
  i1538.characterInfo = i1540
  request.r(i1539[5], i1539[6], 0, i1538, 'texture')
  i1538.originalFontSize = i1539[7]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1545 = data
  i1544.index = i1545[0]
  i1544.advance = i1545[1]
  i1544.bearing = i1545[2]
  i1544.glyphWidth = i1545[3]
  i1544.glyphHeight = i1545[4]
  i1544.minX = i1545[5]
  i1544.maxX = i1545[6]
  i1544.minY = i1545[7]
  i1544.maxY = i1545[8]
  i1544.uvBottomLeftX = i1545[9]
  i1544.uvBottomLeftY = i1545[10]
  i1544.uvBottomRightX = i1545[11]
  i1544.uvBottomRightY = i1545[12]
  i1544.uvTopLeftX = i1545[13]
  i1544.uvTopLeftY = i1545[14]
  i1544.uvTopRightX = i1545[15]
  i1544.uvTopRightY = i1545[16]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1547 = data
  i1546.name = i1547[0]
  var i1549 = i1547[1]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1549[i + 0]) );
  }
  i1546.layers = i1548
  var i1551 = i1547[2]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1551[i + 0]) );
  }
  i1546.parameters = i1550
  i1546.animationClips = i1547[3]
  i1546.avatarUnsupported = i1547[4]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1555 = data
  i1554.name = i1555[0]
  i1554.defaultWeight = i1555[1]
  i1554.blendingMode = i1555[2]
  i1554.avatarMask = i1555[3]
  i1554.syncedLayerIndex = i1555[4]
  i1554.syncedLayerAffectsTiming = !!i1555[5]
  i1554.syncedLayers = i1555[6]
  i1554.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1555[7], i1554.stateMachine)
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1557 = data
  i1556.id = i1557[0]
  i1556.name = i1557[1]
  i1556.path = i1557[2]
  var i1559 = i1557[3]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1559[i + 0]) );
  }
  i1556.states = i1558
  var i1561 = i1557[4]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1561[i + 0]) );
  }
  i1556.machines = i1560
  var i1563 = i1557[5]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1563[i + 0]) );
  }
  i1556.entryStateTransitions = i1562
  var i1565 = i1557[6]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1565[i + 0]) );
  }
  i1556.exitStateTransitions = i1564
  var i1567 = i1557[7]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1567[i + 0]) );
  }
  i1556.anyStateTransitions = i1566
  i1556.defaultStateId = i1557[8]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1571 = data
  i1570.id = i1571[0]
  i1570.name = i1571[1]
  i1570.cycleOffset = i1571[2]
  i1570.cycleOffsetParameter = i1571[3]
  i1570.cycleOffsetParameterActive = !!i1571[4]
  i1570.mirror = !!i1571[5]
  i1570.mirrorParameter = i1571[6]
  i1570.mirrorParameterActive = !!i1571[7]
  i1570.motionId = i1571[8]
  i1570.nameHash = i1571[9]
  i1570.fullPathHash = i1571[10]
  i1570.speed = i1571[11]
  i1570.speedParameter = i1571[12]
  i1570.speedParameterActive = !!i1571[13]
  i1570.tag = i1571[14]
  i1570.tagHash = i1571[15]
  i1570.writeDefaultValues = !!i1571[16]
  var i1573 = i1571[17]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 2) {
  request.r(i1573[i + 0], i1573[i + 1], 2, i1572, '')
  }
  i1570.behaviours = i1572
  var i1575 = i1571[18]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1575[i + 0]) );
  }
  i1570.transitions = i1574
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1581 = data
  i1580.fullPath = i1581[0]
  i1580.canTransitionToSelf = !!i1581[1]
  i1580.duration = i1581[2]
  i1580.exitTime = i1581[3]
  i1580.hasExitTime = !!i1581[4]
  i1580.hasFixedDuration = !!i1581[5]
  i1580.interruptionSource = i1581[6]
  i1580.offset = i1581[7]
  i1580.orderedInterruption = !!i1581[8]
  i1580.destinationStateId = i1581[9]
  i1580.isExit = !!i1581[10]
  i1580.mute = !!i1581[11]
  i1580.solo = !!i1581[12]
  var i1583 = i1581[13]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1583[i + 0]) );
  }
  i1580.conditions = i1582
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1589 = data
  i1588.destinationStateId = i1589[0]
  i1588.isExit = !!i1589[1]
  i1588.mute = !!i1589[2]
  i1588.solo = !!i1589[3]
  var i1591 = i1589[4]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1591[i + 0]) );
  }
  i1588.conditions = i1590
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1595 = data
  i1594.defaultBool = !!i1595[0]
  i1594.defaultFloat = i1595[1]
  i1594.defaultInt = i1595[2]
  i1594.name = i1595[3]
  i1594.nameHash = i1595[4]
  i1594.type = i1595[5]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1599 = data
  i1598.mode = i1599[0]
  i1598.parameter = i1599[1]
  i1598.threshold = i1599[2]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.bytes64 = i1601[1]
  i1600.data = i1601[2]
  return i1600
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1603 = data
  i1602.hashCode = i1603[0]
  request.r(i1603[1], i1603[2], 0, i1602, 'material')
  i1602.materialHashCode = i1603[3]
  request.r(i1603[4], i1603[5], 0, i1602, 'atlas')
  i1602.normalStyle = i1603[6]
  i1602.normalSpacingOffset = i1603[7]
  i1602.boldStyle = i1603[8]
  i1602.boldSpacing = i1603[9]
  i1602.italicStyle = i1603[10]
  i1602.tabSize = i1603[11]
  i1602.m_Version = i1603[12]
  i1602.m_SourceFontFileGUID = i1603[13]
  request.r(i1603[14], i1603[15], 0, i1602, 'm_SourceFontFile_EditorRef')
  request.r(i1603[16], i1603[17], 0, i1602, 'm_SourceFontFile')
  i1602.m_AtlasPopulationMode = i1603[18]
  i1602.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1603[19], i1602.m_FaceInfo)
  var i1605 = i1603[20]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.add(request.d('UnityEngine.TextCore.Glyph', i1605[i + 0]));
  }
  i1602.m_GlyphTable = i1604
  var i1607 = i1603[21]
  var i1606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.add(request.d('TMPro.TMP_Character', i1607[i + 0]));
  }
  i1602.m_CharacterTable = i1606
  var i1609 = i1603[22]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 2, i1608, '')
  }
  i1602.m_AtlasTextures = i1608
  i1602.m_AtlasTextureIndex = i1603[23]
  i1602.m_IsMultiAtlasTexturesEnabled = !!i1603[24]
  i1602.m_ClearDynamicDataOnBuild = !!i1603[25]
  var i1611 = i1603[26]
  var i1610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.add(request.d('UnityEngine.TextCore.GlyphRect', i1611[i + 0]));
  }
  i1602.m_UsedGlyphRects = i1610
  var i1613 = i1603[27]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.add(request.d('UnityEngine.TextCore.GlyphRect', i1613[i + 0]));
  }
  i1602.m_FreeGlyphRects = i1612
  i1602.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1603[28], i1602.m_fontInfo)
  i1602.m_AtlasWidth = i1603[29]
  i1602.m_AtlasHeight = i1603[30]
  i1602.m_AtlasPadding = i1603[31]
  i1602.m_AtlasRenderMode = i1603[32]
  var i1615 = i1603[33]
  var i1614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.add(request.d('TMPro.TMP_Glyph', i1615[i + 0]));
  }
  i1602.m_glyphInfoList = i1614
  i1602.m_KerningTable = request.d('TMPro.KerningTable', i1603[34], i1602.m_KerningTable)
  i1602.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1603[35], i1602.m_FontFeatureTable)
  var i1617 = i1603[36]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 1, i1616, '')
  }
  i1602.fallbackFontAssets = i1616
  var i1619 = i1603[37]
  var i1618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1619.length; i += 2) {
  request.r(i1619[i + 0], i1619[i + 1], 1, i1618, '')
  }
  i1602.m_FallbackFontAssetTable = i1618
  i1602.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1603[38], i1602.m_CreationSettings)
  var i1621 = i1603[39]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('TMPro.TMP_FontWeightPair', i1621[i + 0]) );
  }
  i1602.m_FontWeightTable = i1620
  var i1623 = i1603[40]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('TMPro.TMP_FontWeightPair', i1623[i + 0]) );
  }
  i1602.fontWeights = i1622
  return i1602
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1624 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1625 = data
  i1624.m_FaceIndex = i1625[0]
  i1624.m_FamilyName = i1625[1]
  i1624.m_StyleName = i1625[2]
  i1624.m_PointSize = i1625[3]
  i1624.m_Scale = i1625[4]
  i1624.m_UnitsPerEM = i1625[5]
  i1624.m_LineHeight = i1625[6]
  i1624.m_AscentLine = i1625[7]
  i1624.m_CapLine = i1625[8]
  i1624.m_MeanLine = i1625[9]
  i1624.m_Baseline = i1625[10]
  i1624.m_DescentLine = i1625[11]
  i1624.m_SuperscriptOffset = i1625[12]
  i1624.m_SuperscriptSize = i1625[13]
  i1624.m_SubscriptOffset = i1625[14]
  i1624.m_SubscriptSize = i1625[15]
  i1624.m_UnderlineOffset = i1625[16]
  i1624.m_UnderlineThickness = i1625[17]
  i1624.m_StrikethroughOffset = i1625[18]
  i1624.m_StrikethroughThickness = i1625[19]
  i1624.m_TabWidth = i1625[20]
  return i1624
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1629 = data
  i1628.m_Index = i1629[0]
  i1628.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1629[1], i1628.m_Metrics)
  i1628.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1629[2], i1628.m_GlyphRect)
  i1628.m_Scale = i1629[3]
  i1628.m_AtlasIndex = i1629[4]
  i1628.m_ClassDefinitionType = i1629[5]
  return i1628
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1631 = data
  i1630.m_Width = i1631[0]
  i1630.m_Height = i1631[1]
  i1630.m_HorizontalBearingX = i1631[2]
  i1630.m_HorizontalBearingY = i1631[3]
  i1630.m_HorizontalAdvance = i1631[4]
  return i1630
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1633 = data
  i1632.m_X = i1633[0]
  i1632.m_Y = i1633[1]
  i1632.m_Width = i1633[2]
  i1632.m_Height = i1633[3]
  return i1632
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1636 = root || request.c( 'TMPro.TMP_Character' )
  var i1637 = data
  i1636.m_ElementType = i1637[0]
  i1636.m_Unicode = i1637[1]
  i1636.m_GlyphIndex = i1637[2]
  i1636.m_Scale = i1637[3]
  return i1636
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1642 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1643 = data
  i1642.Name = i1643[0]
  i1642.PointSize = i1643[1]
  i1642.Scale = i1643[2]
  i1642.CharacterCount = i1643[3]
  i1642.LineHeight = i1643[4]
  i1642.Baseline = i1643[5]
  i1642.Ascender = i1643[6]
  i1642.CapHeight = i1643[7]
  i1642.Descender = i1643[8]
  i1642.CenterLine = i1643[9]
  i1642.SuperscriptOffset = i1643[10]
  i1642.SubscriptOffset = i1643[11]
  i1642.SubSize = i1643[12]
  i1642.Underline = i1643[13]
  i1642.UnderlineThickness = i1643[14]
  i1642.strikethrough = i1643[15]
  i1642.strikethroughThickness = i1643[16]
  i1642.TabWidth = i1643[17]
  i1642.Padding = i1643[18]
  i1642.AtlasWidth = i1643[19]
  i1642.AtlasHeight = i1643[20]
  return i1642
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1647 = data
  i1646.id = i1647[0]
  i1646.x = i1647[1]
  i1646.y = i1647[2]
  i1646.width = i1647[3]
  i1646.height = i1647[4]
  i1646.xOffset = i1647[5]
  i1646.yOffset = i1647[6]
  i1646.xAdvance = i1647[7]
  i1646.scale = i1647[8]
  return i1646
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1648 = root || request.c( 'TMPro.KerningTable' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.add(request.d('TMPro.KerningPair', i1651[i + 0]));
  }
  i1648.kerningPairs = i1650
  return i1648
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1654 = root || request.c( 'TMPro.KerningPair' )
  var i1655 = data
  i1654.xOffset = i1655[0]
  i1654.m_FirstGlyph = i1655[1]
  i1654.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1655[2], i1654.m_FirstGlyphAdjustments)
  i1654.m_SecondGlyph = i1655[3]
  i1654.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1655[4], i1654.m_SecondGlyphAdjustments)
  i1654.m_IgnoreSpacingAdjustments = !!i1655[5]
  return i1654
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1656 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1657 = data
  var i1659 = i1657[0]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1659[i + 0]));
  }
  i1656.m_GlyphPairAdjustmentRecords = i1658
  return i1656
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1662 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1663 = data
  i1662.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1663[0], i1662.m_FirstAdjustmentRecord)
  i1662.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1663[1], i1662.m_SecondAdjustmentRecord)
  i1662.m_FeatureLookupFlags = i1663[2]
  return i1662
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1666 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1667 = data
  i1666.sourceFontFileName = i1667[0]
  i1666.sourceFontFileGUID = i1667[1]
  i1666.pointSizeSamplingMode = i1667[2]
  i1666.pointSize = i1667[3]
  i1666.padding = i1667[4]
  i1666.packingMode = i1667[5]
  i1666.atlasWidth = i1667[6]
  i1666.atlasHeight = i1667[7]
  i1666.characterSetSelectionMode = i1667[8]
  i1666.characterSequence = i1667[9]
  i1666.referencedFontAssetGUID = i1667[10]
  i1666.referencedTextAssetGUID = i1667[11]
  i1666.fontStyle = i1667[12]
  i1666.fontStyleModifier = i1667[13]
  i1666.renderMode = i1667[14]
  i1666.includeFontFeatures = !!i1667[15]
  return i1666
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1670 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'regularTypeface')
  request.r(i1671[2], i1671[3], 0, i1670, 'italicTypeface')
  return i1670
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1672 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1673 = data
  i1672.m_GlyphIndex = i1673[0]
  i1672.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1673[1], i1672.m_GlyphValueRecord)
  return i1672
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1674 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1675 = data
  i1674.m_XPlacement = i1675[0]
  i1674.m_YPlacement = i1675[1]
  i1674.m_XAdvance = i1675[2]
  i1674.m_YAdvance = i1675[3]
  return i1674
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1676 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1677 = data
  i1676.useSafeMode = !!i1677[0]
  i1676.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1677[1], i1676.safeModeOptions)
  i1676.timeScale = i1677[2]
  i1676.unscaledTimeScale = i1677[3]
  i1676.useSmoothDeltaTime = !!i1677[4]
  i1676.maxSmoothUnscaledTime = i1677[5]
  i1676.rewindCallbackMode = i1677[6]
  i1676.showUnityEditorReport = !!i1677[7]
  i1676.logBehaviour = i1677[8]
  i1676.drawGizmos = !!i1677[9]
  i1676.defaultRecyclable = !!i1677[10]
  i1676.defaultAutoPlay = i1677[11]
  i1676.defaultUpdateType = i1677[12]
  i1676.defaultTimeScaleIndependent = !!i1677[13]
  i1676.defaultEaseType = i1677[14]
  i1676.defaultEaseOvershootOrAmplitude = i1677[15]
  i1676.defaultEasePeriod = i1677[16]
  i1676.defaultAutoKill = !!i1677[17]
  i1676.defaultLoopType = i1677[18]
  i1676.debugMode = !!i1677[19]
  i1676.debugStoreTargetId = !!i1677[20]
  i1676.showPreviewPanel = !!i1677[21]
  i1676.storeSettingsLocation = i1677[22]
  i1676.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1677[23], i1676.modules)
  i1676.createASMDEF = !!i1677[24]
  i1676.showPlayingTweens = !!i1677[25]
  i1676.showPausedTweens = !!i1677[26]
  return i1676
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1678 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1679 = data
  i1678.logBehaviour = i1679[0]
  i1678.nestedTweenFailureBehaviour = i1679[1]
  return i1678
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1680 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1681 = data
  i1680.showPanel = !!i1681[0]
  i1680.audioEnabled = !!i1681[1]
  i1680.physicsEnabled = !!i1681[2]
  i1680.physics2DEnabled = !!i1681[3]
  i1680.spriteEnabled = !!i1681[4]
  i1680.uiEnabled = !!i1681[5]
  i1680.textMeshProEnabled = !!i1681[6]
  i1680.tk2DEnabled = !!i1681[7]
  i1680.deAudioEnabled = !!i1681[8]
  i1680.deUnityExtendedEnabled = !!i1681[9]
  i1680.epoOutlineEnabled = !!i1681[10]
  return i1680
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1682 = root || request.c( 'TMPro.TMP_Settings' )
  var i1683 = data
  i1682.m_enableWordWrapping = !!i1683[0]
  i1682.m_enableKerning = !!i1683[1]
  i1682.m_enableExtraPadding = !!i1683[2]
  i1682.m_enableTintAllSprites = !!i1683[3]
  i1682.m_enableParseEscapeCharacters = !!i1683[4]
  i1682.m_EnableRaycastTarget = !!i1683[5]
  i1682.m_GetFontFeaturesAtRuntime = !!i1683[6]
  i1682.m_missingGlyphCharacter = i1683[7]
  i1682.m_warningsDisabled = !!i1683[8]
  request.r(i1683[9], i1683[10], 0, i1682, 'm_defaultFontAsset')
  i1682.m_defaultFontAssetPath = i1683[11]
  i1682.m_defaultFontSize = i1683[12]
  i1682.m_defaultAutoSizeMinRatio = i1683[13]
  i1682.m_defaultAutoSizeMaxRatio = i1683[14]
  i1682.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1683[15], i1683[16] )
  i1682.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1683[17], i1683[18] )
  i1682.m_autoSizeTextContainer = !!i1683[19]
  i1682.m_IsTextObjectScaleStatic = !!i1683[20]
  var i1685 = i1683[21]
  var i1684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1685.length; i += 2) {
  request.r(i1685[i + 0], i1685[i + 1], 1, i1684, '')
  }
  i1682.m_fallbackFontAssets = i1684
  i1682.m_matchMaterialPreset = !!i1683[22]
  request.r(i1683[23], i1683[24], 0, i1682, 'm_defaultSpriteAsset')
  i1682.m_defaultSpriteAssetPath = i1683[25]
  i1682.m_enableEmojiSupport = !!i1683[26]
  i1682.m_MissingCharacterSpriteUnicode = i1683[27]
  i1682.m_defaultColorGradientPresetsPath = i1683[28]
  request.r(i1683[29], i1683[30], 0, i1682, 'm_defaultStyleSheet')
  i1682.m_StyleSheetsResourcePath = i1683[31]
  request.r(i1683[32], i1683[33], 0, i1682, 'm_leadingCharacters')
  request.r(i1683[34], i1683[35], 0, i1682, 'm_followingCharacters')
  i1682.m_UseModernHangulLineBreakingRules = !!i1683[36]
  return i1682
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1686 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1687 = data
  i1686.hashCode = i1687[0]
  request.r(i1687[1], i1687[2], 0, i1686, 'material')
  i1686.materialHashCode = i1687[3]
  request.r(i1687[4], i1687[5], 0, i1686, 'spriteSheet')
  var i1689 = i1687[6]
  var i1688 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.add(request.d('TMPro.TMP_Sprite', i1689[i + 0]));
  }
  i1686.spriteInfoList = i1688
  var i1691 = i1687[7]
  var i1690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1691.length; i += 2) {
  request.r(i1691[i + 0], i1691[i + 1], 1, i1690, '')
  }
  i1686.fallbackSpriteAssets = i1690
  i1686.m_Version = i1687[8]
  i1686.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1687[9], i1686.m_FaceInfo)
  var i1693 = i1687[10]
  var i1692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.add(request.d('TMPro.TMP_SpriteCharacter', i1693[i + 0]));
  }
  i1686.m_SpriteCharacterTable = i1692
  var i1695 = i1687[11]
  var i1694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.add(request.d('TMPro.TMP_SpriteGlyph', i1695[i + 0]));
  }
  i1686.m_SpriteGlyphTable = i1694
  return i1686
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1698 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.hashCode = i1699[1]
  i1698.unicode = i1699[2]
  i1698.pivot = new pc.Vec2( i1699[3], i1699[4] )
  request.r(i1699[5], i1699[6], 0, i1698, 'sprite')
  i1698.id = i1699[7]
  i1698.x = i1699[8]
  i1698.y = i1699[9]
  i1698.width = i1699[10]
  i1698.height = i1699[11]
  i1698.xOffset = i1699[12]
  i1698.yOffset = i1699[13]
  i1698.xAdvance = i1699[14]
  i1698.scale = i1699[15]
  return i1698
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1704 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1705 = data
  i1704.m_Name = i1705[0]
  i1704.m_HashCode = i1705[1]
  i1704.m_ElementType = i1705[2]
  i1704.m_Unicode = i1705[3]
  i1704.m_GlyphIndex = i1705[4]
  i1704.m_Scale = i1705[5]
  return i1704
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1708 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'sprite')
  i1708.m_Index = i1709[2]
  i1708.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1709[3], i1708.m_Metrics)
  i1708.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1709[4], i1708.m_GlyphRect)
  i1708.m_Scale = i1709[5]
  i1708.m_AtlasIndex = i1709[6]
  i1708.m_ClassDefinitionType = i1709[7]
  return i1708
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1710 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1711 = data
  var i1713 = i1711[0]
  var i1712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1713.length; i += 1) {
    i1712.add(request.d('TMPro.TMP_Style', i1713[i + 0]));
  }
  i1710.m_StyleList = i1712
  return i1710
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1716 = root || request.c( 'TMPro.TMP_Style' )
  var i1717 = data
  i1716.m_Name = i1717[0]
  i1716.m_HashCode = i1717[1]
  i1716.m_OpeningDefinition = i1717[2]
  i1716.m_ClosingDefinition = i1717[3]
  i1716.m_OpeningTagArray = i1717[4]
  i1716.m_ClosingTagArray = i1717[5]
  i1716.m_OpeningTagUnicodeArray = i1717[6]
  i1716.m_ClosingTagUnicodeArray = i1717[7]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1719 = data
  var i1721 = i1719[0]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1721[i + 0]) );
  }
  i1718.files = i1720
  i1718.componentToPrefabIds = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1725 = data
  i1724.path = i1725[0]
  request.r(i1725[1], i1725[2], 0, i1724, 'unityObject')
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1727 = data
  var i1729 = i1727[0]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1729[i + 0]) );
  }
  i1726.scriptsExecutionOrder = i1728
  var i1731 = i1727[1]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1731[i + 0]) );
  }
  i1726.sortingLayers = i1730
  var i1733 = i1727[2]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1733[i + 0]) );
  }
  i1726.cullingLayers = i1732
  i1726.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1727[3], i1726.timeSettings)
  i1726.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1727[4], i1726.physicsSettings)
  i1726.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1727[5], i1726.physics2DSettings)
  i1726.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1727[6], i1726.qualitySettings)
  i1726.enableRealtimeShadows = !!i1727[7]
  i1726.enableAutoInstancing = !!i1727[8]
  i1726.enableDynamicBatching = !!i1727[9]
  i1726.lightmapEncodingQuality = i1727[10]
  i1726.desiredColorSpace = i1727[11]
  var i1735 = i1727[12]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 1) {
    i1734.push( i1735[i + 0] );
  }
  i1726.allTags = i1734
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.value = i1739[1]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1743 = data
  i1742.id = i1743[0]
  i1742.name = i1743[1]
  i1742.value = i1743[2]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1747 = data
  i1746.id = i1747[0]
  i1746.name = i1747[1]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1749 = data
  i1748.fixedDeltaTime = i1749[0]
  i1748.maximumDeltaTime = i1749[1]
  i1748.timeScale = i1749[2]
  i1748.maximumParticleTimestep = i1749[3]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1751 = data
  i1750.gravity = new pc.Vec3( i1751[0], i1751[1], i1751[2] )
  i1750.defaultSolverIterations = i1751[3]
  i1750.bounceThreshold = i1751[4]
  i1750.autoSyncTransforms = !!i1751[5]
  i1750.autoSimulation = !!i1751[6]
  var i1753 = i1751[7]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1753[i + 0]) );
  }
  i1750.collisionMatrix = i1752
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1757 = data
  i1756.enabled = !!i1757[0]
  i1756.layerId = i1757[1]
  i1756.otherLayerId = i1757[2]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'material')
  i1758.gravity = new pc.Vec2( i1759[2], i1759[3] )
  i1758.positionIterations = i1759[4]
  i1758.velocityIterations = i1759[5]
  i1758.velocityThreshold = i1759[6]
  i1758.maxLinearCorrection = i1759[7]
  i1758.maxAngularCorrection = i1759[8]
  i1758.maxTranslationSpeed = i1759[9]
  i1758.maxRotationSpeed = i1759[10]
  i1758.baumgarteScale = i1759[11]
  i1758.baumgarteTOIScale = i1759[12]
  i1758.timeToSleep = i1759[13]
  i1758.linearSleepTolerance = i1759[14]
  i1758.angularSleepTolerance = i1759[15]
  i1758.defaultContactOffset = i1759[16]
  i1758.autoSimulation = !!i1759[17]
  i1758.queriesHitTriggers = !!i1759[18]
  i1758.queriesStartInColliders = !!i1759[19]
  i1758.callbacksOnDisable = !!i1759[20]
  i1758.reuseCollisionCallbacks = !!i1759[21]
  i1758.autoSyncTransforms = !!i1759[22]
  var i1761 = i1759[23]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1761[i + 0]) );
  }
  i1758.collisionMatrix = i1760
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1765 = data
  i1764.enabled = !!i1765[0]
  i1764.layerId = i1765[1]
  i1764.otherLayerId = i1765[2]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1767 = data
  var i1769 = i1767[0]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1769[i + 0]) );
  }
  i1766.qualityLevels = i1768
  var i1771 = i1767[1]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( i1771[i + 0] );
  }
  i1766.names = i1770
  i1766.shadows = i1767[2]
  i1766.anisotropicFiltering = i1767[3]
  i1766.antiAliasing = i1767[4]
  i1766.lodBias = i1767[5]
  i1766.shadowCascades = i1767[6]
  i1766.shadowDistance = i1767[7]
  i1766.shadowmaskMode = i1767[8]
  i1766.shadowProjection = i1767[9]
  i1766.shadowResolution = i1767[10]
  i1766.softParticles = !!i1767[11]
  i1766.softVegetation = !!i1767[12]
  i1766.activeColorSpace = i1767[13]
  i1766.desiredColorSpace = i1767[14]
  i1766.masterTextureLimit = i1767[15]
  i1766.maxQueuedFrames = i1767[16]
  i1766.particleRaycastBudget = i1767[17]
  i1766.pixelLightCount = i1767[18]
  i1766.realtimeReflectionProbes = !!i1767[19]
  i1766.shadowCascade2Split = i1767[20]
  i1766.shadowCascade4Split = new pc.Vec3( i1767[21], i1767[22], i1767[23] )
  i1766.streamingMipmapsActive = !!i1767[24]
  i1766.vSyncCount = i1767[25]
  i1766.asyncUploadBufferSize = i1767[26]
  i1766.asyncUploadTimeSlice = i1767[27]
  i1766.billboardsFaceCameraPosition = !!i1767[28]
  i1766.shadowNearPlaneOffset = i1767[29]
  i1766.streamingMipmapsMemoryBudget = i1767[30]
  i1766.maximumLODLevel = i1767[31]
  i1766.streamingMipmapsAddAllCameras = !!i1767[32]
  i1766.streamingMipmapsMaxLevelReduction = i1767[33]
  i1766.streamingMipmapsRenderersPerFrame = i1767[34]
  i1766.resolutionScalingFixedDPIFactor = i1767[35]
  i1766.streamingMipmapsMaxFileIORequests = i1767[36]
  i1766.currentQualityLevel = i1767[37]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1777 = data
  i1776.weight = i1777[0]
  i1776.vertices = i1777[1]
  i1776.normals = i1777[2]
  i1776.tangents = i1777[3]
  return i1776
}

Deserializers["DataPlacePiece"] = function (request, data, root) {
  var i1780 = root || request.c( 'DataPlacePiece' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.add(i1783[i + 0]);
  }
  i1780.blocksShowIndex = i1782
  var i1785 = i1781[1]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.add(i1785[i + 0]);
  }
  i1780.blocksHideIndex = i1784
  i1780.pieces = i1781[2]
  i1780.DestroyLine = !!i1781[3]
  i1780.dataPosition = i1781[4]
  i1780.dataPieces = i1781[5]
  i1780.dataPiecesShape = i1781[6]
  i1780.datablocksHideIndex = i1781[7]
  i1780.datablocksShowIndex = i1781[8]
  i1780.dataBombsIndex = i1781[9]
  return i1780
}

Deserializers["BombDetail"] = function (request, data, root) {
  var i1788 = root || request.c( 'BombDetail' )
  var i1789 = data
  i1788.bombIndex = i1789[0]
  i1788.stepBomb = i1789[1]
  return i1788
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1791 = data
  i1790.xPlacement = i1791[0]
  i1790.yPlacement = i1791[1]
  i1790.xAdvance = i1791[2]
  i1790.yAdvance = i1791[3]
  return i1790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"101":[102],"103":[102],"104":[102],"105":[102],"106":[102],"107":[102],"108":[109],"68":[41],"110":[111],"112":[111],"113":[111],"114":[111],"115":[111],"116":[111],"117":[111],"118":[20],"119":[20],"120":[20],"121":[20],"122":[20],"123":[20],"124":[20],"125":[20],"126":[20],"127":[20],"128":[20],"129":[20],"130":[20],"131":[41],"132":[91],"133":[134],"135":[134],"21":[12],"136":[40],"137":[138],"139":[3],"140":[138],"141":[12],"142":[12],"31":[21],"15":[16,12],"53":[12],"30":[21],"143":[12],"144":[12],"44":[12],"145":[12],"39":[12],"146":[12],"38":[12],"147":[12],"148":[12],"149":[16,12],"150":[12],"151":[12],"152":[12],"153":[12],"49":[16,12],"154":[12],"155":[66],"156":[66],"67":[66],"157":[66],"158":[41],"159":[41],"160":[161],"162":[41],"163":[12],"90":[91,12],"14":[12,16],"164":[12],"165":[16,12],"166":[91],"167":[16,12],"168":[12],"169":[138]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","BoardContainer","BlockBoard","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.RectTransform","GemCounter","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","DestroyByTime","UnityEngine.Rigidbody2D","UnityEngine.Canvas","BlockObj","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","EffectObj","BoosterMoveDestroy","BombItem","UnityEngine.GameObject","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CurveMove","Piece","UnityEngine.BoxCollider","TutorialPointerBehaviour","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Camera","MenuScreen","AdjustRectTransformForSafeArea","UnityEngine.UI.HorizontalLayoutGroup","SoundButton","LayoutSupportDisplay","UIAnimation","GameScreen","UnityEngine.UI.Text","UnityEngine.UI.Shadow","UnityEngine.CanvasGroup","PopUpFrameWork.PopupManager","UnityEngine.UI.AspectRatioFitter","RectTransformByOrientation","BoosterManager","DOTWeenPulseAnim","TransformByOrientation","UnityEngine.Rendering.SortingGroup","EndcardManagement","PopUpFrameWork.Popup","SecondChancePopup","SettingPopup","GameOverPopup","FadeOutCanvasGroup","UnityEventOnEnable","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.FlareLayer","UnityEngine.AudioListener","CameraSizeByResolution","PlayingManager","TutorialManager","TutorialBoardData","CameraController","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","ScreenFrameWork.ScreenManager","GameManager","PrefabsManager","PieceManager","EffectManager","SpriteManager","BombMode","TimeMode","EmptyMode","OrientationManager","BlockColorApplier","FPSController","TMPro.TextMeshPro","UnityEngine.MeshRenderer","RestartStage","ParticleEffectManager","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScreenFrameWork.ScreenBackButton","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "BasePlayworksProject";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "21.1";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "ZoomBoard";

Deserializers.lunaAppID = "15065";

Deserializers.projectId = "6c1be5bf0a106ba48902a4e901795c4a";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1678";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5023";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.DefaultCompany.BasePlayworksProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "d7450e7b-4d8a-4905-9219-08744a5e35b5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

