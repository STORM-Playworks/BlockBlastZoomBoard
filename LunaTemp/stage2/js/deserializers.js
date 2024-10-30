var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.JointSpring' )
  var i2689 = data
  i2688.spring = i2689[0]
  i2688.damper = i2689[1]
  i2688.targetPosition = i2689[2]
  return i2688
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.JointMotor' )
  var i2691 = data
  i2690.m_TargetVelocity = i2691[0]
  i2690.m_Force = i2691[1]
  i2690.m_FreeSpin = i2691[2]
  return i2690
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.JointLimits' )
  var i2693 = data
  i2692.m_Min = i2693[0]
  i2692.m_Max = i2693[1]
  i2692.m_Bounciness = i2693[2]
  i2692.m_BounceMinVelocity = i2693[3]
  i2692.m_ContactDistance = i2693[4]
  i2692.minBounce = i2693[5]
  i2692.maxBounce = i2693[6]
  return i2692
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.JointDrive' )
  var i2695 = data
  i2694.m_PositionSpring = i2695[0]
  i2694.m_PositionDamper = i2695[1]
  i2694.m_MaximumForce = i2695[2]
  i2694.m_UseAcceleration = i2695[3]
  return i2694
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2697 = data
  i2696.m_Spring = i2697[0]
  i2696.m_Damper = i2697[1]
  return i2696
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2699 = data
  i2698.m_Limit = i2699[0]
  i2698.m_Bounciness = i2699[1]
  i2698.m_ContactDistance = i2699[2]
  return i2698
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2701 = data
  i2700.m_ExtremumSlip = i2701[0]
  i2700.m_ExtremumValue = i2701[1]
  i2700.m_AsymptoteSlip = i2701[2]
  i2700.m_AsymptoteValue = i2701[3]
  i2700.m_Stiffness = i2701[4]
  return i2700
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2702 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2703 = data
  i2702.m_LowerAngle = i2703[0]
  i2702.m_UpperAngle = i2703[1]
  return i2702
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2704 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2705 = data
  i2704.m_MotorSpeed = i2705[0]
  i2704.m_MaximumMotorTorque = i2705[1]
  return i2704
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2707 = data
  i2706.m_DampingRatio = i2707[0]
  i2706.m_Frequency = i2707[1]
  i2706.m_Angle = i2707[2]
  return i2706
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2709 = data
  i2708.m_LowerTranslation = i2709[0]
  i2708.m_UpperTranslation = i2709[1]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2711 = data
  i2710.name = i2711[0]
  i2710.width = i2711[1]
  i2710.height = i2711[2]
  i2710.mipmapCount = i2711[3]
  i2710.anisoLevel = i2711[4]
  i2710.filterMode = i2711[5]
  i2710.hdr = !!i2711[6]
  i2710.format = i2711[7]
  i2710.wrapMode = i2711[8]
  i2710.alphaIsTransparency = !!i2711[9]
  i2710.alphaSource = i2711[10]
  i2710.graphicsFormat = i2711[11]
  i2710.sRGBTexture = !!i2711[12]
  i2710.desiredColorSpace = i2711[13]
  i2710.wrapU = i2711[14]
  i2710.wrapV = i2711[15]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2712 = root || new pc.UnityMaterial()
  var i2713 = data
  i2712.name = i2713[0]
  request.r(i2713[1], i2713[2], 0, i2712, 'shader')
  i2712.renderQueue = i2713[3]
  i2712.enableInstancing = !!i2713[4]
  var i2715 = i2713[5]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2715[i + 0]) );
  }
  i2712.floatParameters = i2714
  var i2717 = i2713[6]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2717[i + 0]) );
  }
  i2712.colorParameters = i2716
  var i2719 = i2713[7]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2719[i + 0]) );
  }
  i2712.vectorParameters = i2718
  var i2721 = i2713[8]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2721[i + 0]) );
  }
  i2712.textureParameters = i2720
  var i2723 = i2713[9]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2723[i + 0]) );
  }
  i2712.materialFlags = i2722
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2727 = data
  i2726.name = i2727[0]
  i2726.value = i2727[1]
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2731 = data
  i2730.name = i2731[0]
  i2730.value = new pc.Color(i2731[1], i2731[2], i2731[3], i2731[4])
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2735 = data
  i2734.name = i2735[0]
  i2734.value = new pc.Vec4( i2735[1], i2735[2], i2735[3], i2735[4] )
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2739 = data
  i2738.name = i2739[0]
  request.r(i2739[1], i2739[2], 0, i2738, 'value')
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2743 = data
  i2742.name = i2743[0]
  i2742.enabled = !!i2743[1]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2745 = data
  i2744.position = new pc.Vec3( i2745[0], i2745[1], i2745[2] )
  i2744.scale = new pc.Vec3( i2745[3], i2745[4], i2745[5] )
  i2744.rotation = new pc.Quat(i2745[6], i2745[7], i2745[8], i2745[9])
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2747 = data
  i2746.enabled = !!i2747[0]
  request.r(i2747[1], i2747[2], 0, i2746, 'sharedMaterial')
  var i2749 = i2747[3]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 2) {
  request.r(i2749[i + 0], i2749[i + 1], 2, i2748, '')
  }
  i2746.sharedMaterials = i2748
  i2746.receiveShadows = !!i2747[4]
  i2746.shadowCastingMode = i2747[5]
  i2746.sortingLayerID = i2747[6]
  i2746.sortingOrder = i2747[7]
  i2746.lightmapIndex = i2747[8]
  i2746.lightmapSceneIndex = i2747[9]
  i2746.lightmapScaleOffset = new pc.Vec4( i2747[10], i2747[11], i2747[12], i2747[13] )
  i2746.lightProbeUsage = i2747[14]
  i2746.reflectionProbeUsage = i2747[15]
  i2746.color = new pc.Color(i2747[16], i2747[17], i2747[18], i2747[19])
  request.r(i2747[20], i2747[21], 0, i2746, 'sprite')
  i2746.flipX = !!i2747[22]
  i2746.flipY = !!i2747[23]
  i2746.drawMode = i2747[24]
  i2746.size = new pc.Vec2( i2747[25], i2747[26] )
  i2746.tileMode = i2747[27]
  i2746.adaptiveModeThreshold = i2747[28]
  i2746.maskInteraction = i2747[29]
  i2746.spriteSortPoint = i2747[30]
  return i2746
}

Deserializers["BoardContainer"] = function (request, data, root) {
  var i2752 = root || request.c( 'BoardContainer' )
  var i2753 = data
  i2752.AnimateBoardGrow = !!i2753[0]
  i2752.width = i2753[1]
  i2752.height = i2753[2]
  var i2755 = i2753[3]
  var i2754 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i2755.length; i += 2) {
  request.r(i2755[i + 0], i2755[i + 1], 1, i2754, '')
  }
  i2752.blocks = i2754
  var i2757 = i2753[4]
  var i2756 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i2757.length; i += 2) {
  request.r(i2757[i + 0], i2757[i + 1], 1, i2756, '')
  }
  i2752.allBlocksInBoard = i2756
  i2752.blockScale = i2753[5]
  request.r(i2753[6], i2753[7], 0, i2752, 'placeBlockPoint')
  request.r(i2753[8], i2753[9], 0, i2752, 'blockPrefab')
  request.r(i2753[10], i2753[11], 0, i2752, 'shake')
  var i2759 = i2753[12]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 2) {
  request.r(i2759[i + 0], i2759[i + 1], 2, i2758, '')
  }
  i2752.gemCounters = i2758
  i2752.gridSizeSteps = i2753[13]
  i2752.blockRiseTime = i2753[14]
  i2752.totalBlockAnimationTimes = i2753[15]
  i2752.blockLandAnimCurve = new pc.AnimationCurve( { keys_flow: i2753[16] } )
  request.r(i2753[17], i2753[18], 0, i2752, 'cameraController')
  request.r(i2753[19], i2753[20], 0, i2752, 'border')
  i2752.borderSizePerUnit = i2753[21]
  i2752.borderSizeOffset = i2753[22]
  i2752.boardOffsetPerStep = i2753[23]
  i2752.duration = i2753[24]
  i2752.strength = new pc.Vec3( i2753[25], i2753[26], i2753[27] )
  i2752.vibrato = i2753[28]
  request.r(i2753[29], i2753[30], 0, i2752, 'nextBlockWidth')
  request.r(i2753[31], i2753[32], 0, i2752, 'nextBlockHeight')
  i2752.hexaBoard = !!i2753[33]
  i2752.dstXHexaMode = i2753[34]
  var i2761 = i2753[35]
  var i2760 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.add(!!i2761[i + 0]);
  }
  i2752.dataBlocksHexa = i2760
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2769 = data
  i2768.playAutomatically = !!i2769[0]
  request.r(i2769[1], i2769[2], 0, i2768, 'clip')
  var i2771 = i2769[3]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 2) {
  request.r(i2771[i + 0], i2771[i + 1], 2, i2770, '')
  }
  i2768.clips = i2770
  i2768.wrapMode = i2769[4]
  i2768.enabled = !!i2769[5]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2775 = data
  i2774.name = i2775[0]
  i2774.tagId = i2775[1]
  i2774.enabled = !!i2775[2]
  i2774.isStatic = !!i2775[3]
  i2774.layer = i2775[4]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2777 = data
  i2776.usedByComposite = !!i2777[0]
  i2776.autoTiling = !!i2777[1]
  i2776.size = new pc.Vec2( i2777[2], i2777[3] )
  i2776.edgeRadius = i2777[4]
  i2776.enabled = !!i2777[5]
  i2776.isTrigger = !!i2777[6]
  i2776.usedByEffector = !!i2777[7]
  i2776.density = i2777[8]
  i2776.offset = new pc.Vec2( i2777[9], i2777[10] )
  request.r(i2777[11], i2777[12], 0, i2776, 'material')
  return i2776
}

Deserializers["BlockBoard"] = function (request, data, root) {
  var i2778 = root || request.c( 'BlockBoard' )
  var i2779 = data
  request.r(i2779[0], i2779[1], 0, i2778, 'gemSR')
  i2778.blockIndex = i2779[2]
  i2778.color = i2779[3]
  i2778.gemColor = i2779[4]
  i2778.x = i2779[5]
  i2778.y = i2779[6]
  request.r(i2779[7], i2779[8], 0, i2778, 'block')
  request.r(i2779[9], i2779[10], 0, i2778, 'blockHightLight')
  request.r(i2779[11], i2779[12], 0, i2778, 'emptyBlock')
  var i2781 = i2779[13]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 1, i2780, '')
  }
  i2778.blocksBoardCross1 = i2780
  var i2783 = i2779[14]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i2783.length; i += 2) {
  request.r(i2783[i + 0], i2783[i + 1], 1, i2782, '')
  }
  i2778.blocksBoardCross2 = i2782
  i2778.inactiveSortOrder = i2779[15]
  i2778.activeSortOrder = i2779[16]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2785 = data
  i2784.pivot = new pc.Vec2( i2785[0], i2785[1] )
  i2784.anchorMin = new pc.Vec2( i2785[2], i2785[3] )
  i2784.anchorMax = new pc.Vec2( i2785[4], i2785[5] )
  i2784.sizeDelta = new pc.Vec2( i2785[6], i2785[7] )
  i2784.anchoredPosition3D = new pc.Vec3( i2785[8], i2785[9], i2785[10] )
  i2784.rotation = new pc.Quat(i2785[11], i2785[12], i2785[13], i2785[14])
  i2784.scale = new pc.Vec3( i2785[15], i2785[16], i2785[17] )
  return i2784
}

Deserializers["GemCounter"] = function (request, data, root) {
  var i2786 = root || request.c( 'GemCounter' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'countText')
  request.r(i2787[2], i2787[3], 0, i2786, 'gemIcon')
  i2786.neededAmount = i2787[4]
  i2786.currentAmount = i2787[5]
  i2786.receiveAnimDuration = i2787[6]
  i2786.flyOverDuration = i2787[7]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2789 = data
  i2788.cullTransparentMesh = !!i2789[0]
  return i2788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.UI.Image' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'm_Sprite')
  i2790.m_Type = i2791[2]
  i2790.m_PreserveAspect = !!i2791[3]
  i2790.m_FillCenter = !!i2791[4]
  i2790.m_FillMethod = i2791[5]
  i2790.m_FillAmount = i2791[6]
  i2790.m_FillClockwise = !!i2791[7]
  i2790.m_FillOrigin = i2791[8]
  i2790.m_UseSpriteMesh = !!i2791[9]
  i2790.m_PixelsPerUnitMultiplier = i2791[10]
  request.r(i2791[11], i2791[12], 0, i2790, 'm_Material')
  i2790.m_Maskable = !!i2791[13]
  i2790.m_Color = new pc.Color(i2791[14], i2791[15], i2791[16], i2791[17])
  i2790.m_RaycastTarget = !!i2791[18]
  i2790.m_RaycastPadding = new pc.Vec4( i2791[19], i2791[20], i2791[21], i2791[22] )
  return i2790
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2793 = data
  i2792.m_hasFontAssetChanged = !!i2793[0]
  request.r(i2793[1], i2793[2], 0, i2792, 'm_baseMaterial')
  i2792.m_maskOffset = new pc.Vec4( i2793[3], i2793[4], i2793[5], i2793[6] )
  i2792.m_text = i2793[7]
  i2792.m_isRightToLeft = !!i2793[8]
  request.r(i2793[9], i2793[10], 0, i2792, 'm_fontAsset')
  request.r(i2793[11], i2793[12], 0, i2792, 'm_sharedMaterial')
  var i2795 = i2793[13]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 2, i2794, '')
  }
  i2792.m_fontSharedMaterials = i2794
  request.r(i2793[14], i2793[15], 0, i2792, 'm_fontMaterial')
  var i2797 = i2793[16]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 2) {
  request.r(i2797[i + 0], i2797[i + 1], 2, i2796, '')
  }
  i2792.m_fontMaterials = i2796
  i2792.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2793[17], i2793[18], i2793[19], i2793[20])
  i2792.m_fontColor = new pc.Color(i2793[21], i2793[22], i2793[23], i2793[24])
  i2792.m_enableVertexGradient = !!i2793[25]
  i2792.m_colorMode = i2793[26]
  i2792.m_fontColorGradient = request.d('TMPro.VertexGradient', i2793[27], i2792.m_fontColorGradient)
  request.r(i2793[28], i2793[29], 0, i2792, 'm_fontColorGradientPreset')
  request.r(i2793[30], i2793[31], 0, i2792, 'm_spriteAsset')
  i2792.m_tintAllSprites = !!i2793[32]
  request.r(i2793[33], i2793[34], 0, i2792, 'm_StyleSheet')
  i2792.m_TextStyleHashCode = i2793[35]
  i2792.m_overrideHtmlColors = !!i2793[36]
  i2792.m_faceColor = UnityEngine.Color32.ConstructColor(i2793[37], i2793[38], i2793[39], i2793[40])
  i2792.m_fontSize = i2793[41]
  i2792.m_fontSizeBase = i2793[42]
  i2792.m_fontWeight = i2793[43]
  i2792.m_enableAutoSizing = !!i2793[44]
  i2792.m_fontSizeMin = i2793[45]
  i2792.m_fontSizeMax = i2793[46]
  i2792.m_fontStyle = i2793[47]
  i2792.m_HorizontalAlignment = i2793[48]
  i2792.m_VerticalAlignment = i2793[49]
  i2792.m_textAlignment = i2793[50]
  i2792.m_characterSpacing = i2793[51]
  i2792.m_wordSpacing = i2793[52]
  i2792.m_lineSpacing = i2793[53]
  i2792.m_lineSpacingMax = i2793[54]
  i2792.m_paragraphSpacing = i2793[55]
  i2792.m_charWidthMaxAdj = i2793[56]
  i2792.m_enableWordWrapping = !!i2793[57]
  i2792.m_wordWrappingRatios = i2793[58]
  i2792.m_overflowMode = i2793[59]
  request.r(i2793[60], i2793[61], 0, i2792, 'm_linkedTextComponent')
  request.r(i2793[62], i2793[63], 0, i2792, 'parentLinkedComponent')
  i2792.m_enableKerning = !!i2793[64]
  i2792.m_enableExtraPadding = !!i2793[65]
  i2792.checkPaddingRequired = !!i2793[66]
  i2792.m_isRichText = !!i2793[67]
  i2792.m_parseCtrlCharacters = !!i2793[68]
  i2792.m_isOrthographic = !!i2793[69]
  i2792.m_isCullingEnabled = !!i2793[70]
  i2792.m_horizontalMapping = i2793[71]
  i2792.m_verticalMapping = i2793[72]
  i2792.m_uvLineOffset = i2793[73]
  i2792.m_geometrySortingOrder = i2793[74]
  i2792.m_IsTextObjectScaleStatic = !!i2793[75]
  i2792.m_VertexBufferAutoSizeReduction = !!i2793[76]
  i2792.m_useMaxVisibleDescender = !!i2793[77]
  i2792.m_pageToDisplay = i2793[78]
  i2792.m_margin = new pc.Vec4( i2793[79], i2793[80], i2793[81], i2793[82] )
  i2792.m_isUsingLegacyAnimationComponent = !!i2793[83]
  i2792.m_isVolumetricText = !!i2793[84]
  request.r(i2793[85], i2793[86], 0, i2792, 'm_Material')
  i2792.m_Maskable = !!i2793[87]
  i2792.m_Color = new pc.Color(i2793[88], i2793[89], i2793[90], i2793[91])
  i2792.m_RaycastTarget = !!i2793[92]
  i2792.m_RaycastPadding = new pc.Vec4( i2793[93], i2793[94], i2793[95], i2793[96] )
  return i2792
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2798 = root || request.c( 'TMPro.VertexGradient' )
  var i2799 = data
  i2798.topLeft = new pc.Color(i2799[0], i2799[1], i2799[2], i2799[3])
  i2798.topRight = new pc.Color(i2799[4], i2799[5], i2799[6], i2799[7])
  i2798.bottomLeft = new pc.Color(i2799[8], i2799[9], i2799[10], i2799[11])
  i2798.bottomRight = new pc.Color(i2799[12], i2799[13], i2799[14], i2799[15])
  return i2798
}

Deserializers["DestroyByTime"] = function (request, data, root) {
  var i2800 = root || request.c( 'DestroyByTime' )
  var i2801 = data
  i2800.hideObject = !!i2801[0]
  i2800.destroyTime = i2801[1]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2803 = data
  i2802.bodyType = i2803[0]
  request.r(i2803[1], i2803[2], 0, i2802, 'material')
  i2802.simulated = !!i2803[3]
  i2802.useAutoMass = !!i2803[4]
  i2802.mass = i2803[5]
  i2802.drag = i2803[6]
  i2802.angularDrag = i2803[7]
  i2802.gravityScale = i2803[8]
  i2802.collisionDetectionMode = i2803[9]
  i2802.sleepMode = i2803[10]
  i2802.constraints = i2803[11]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.planeDistance = i2805[1]
  i2804.referencePixelsPerUnit = i2805[2]
  i2804.isFallbackOverlay = !!i2805[3]
  i2804.renderMode = i2805[4]
  i2804.renderOrder = i2805[5]
  i2804.sortingLayerName = i2805[6]
  i2804.sortingOrder = i2805[7]
  i2804.scaleFactor = i2805[8]
  request.r(i2805[9], i2805[10], 0, i2804, 'worldCamera')
  i2804.overrideSorting = !!i2805[11]
  i2804.pixelPerfect = !!i2805[12]
  i2804.targetDisplay = i2805[13]
  i2804.overridePixelPerfect = !!i2805[14]
  return i2804
}

Deserializers["BlockObj"] = function (request, data, root) {
  var i2806 = root || request.c( 'BlockObj' )
  var i2807 = data
  request.r(i2807[0], i2807[1], 0, i2806, 'block')
  request.r(i2807[2], i2807[3], 0, i2806, 'blockDestroyLine')
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2809 = data
  i2808.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2809[0], i2808.main)
  i2808.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2809[1], i2808.colorBySpeed)
  i2808.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2809[2], i2808.colorOverLifetime)
  i2808.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2809[3], i2808.emission)
  i2808.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2809[4], i2808.rotationBySpeed)
  i2808.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2809[5], i2808.rotationOverLifetime)
  i2808.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2809[6], i2808.shape)
  i2808.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2809[7], i2808.sizeBySpeed)
  i2808.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2809[8], i2808.sizeOverLifetime)
  i2808.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2809[9], i2808.textureSheetAnimation)
  i2808.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2809[10], i2808.velocityOverLifetime)
  i2808.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2809[11], i2808.noise)
  i2808.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2809[12], i2808.inheritVelocity)
  i2808.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2809[13], i2808.forceOverLifetime)
  i2808.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2809[14], i2808.limitVelocityOverLifetime)
  i2808.useAutoRandomSeed = !!i2809[15]
  i2808.randomSeed = i2809[16]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2810 = root || new pc.ParticleSystemMain()
  var i2811 = data
  i2810.duration = i2811[0]
  i2810.loop = !!i2811[1]
  i2810.prewarm = !!i2811[2]
  i2810.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[3], i2810.startDelay)
  i2810.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[4], i2810.startLifetime)
  i2810.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[5], i2810.startSpeed)
  i2810.startSize3D = !!i2811[6]
  i2810.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[7], i2810.startSizeX)
  i2810.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[8], i2810.startSizeY)
  i2810.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[9], i2810.startSizeZ)
  i2810.startRotation3D = !!i2811[10]
  i2810.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[11], i2810.startRotationX)
  i2810.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[12], i2810.startRotationY)
  i2810.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[13], i2810.startRotationZ)
  i2810.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2811[14], i2810.startColor)
  i2810.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2811[15], i2810.gravityModifier)
  i2810.simulationSpace = i2811[16]
  request.r(i2811[17], i2811[18], 0, i2810, 'customSimulationSpace')
  i2810.simulationSpeed = i2811[19]
  i2810.useUnscaledTime = !!i2811[20]
  i2810.scalingMode = i2811[21]
  i2810.playOnAwake = !!i2811[22]
  i2810.maxParticles = i2811[23]
  i2810.emitterVelocityMode = i2811[24]
  i2810.stopAction = i2811[25]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2812 = root || new pc.MinMaxCurve()
  var i2813 = data
  i2812.mode = i2813[0]
  i2812.curveMin = new pc.AnimationCurve( { keys_flow: i2813[1] } )
  i2812.curveMax = new pc.AnimationCurve( { keys_flow: i2813[2] } )
  i2812.curveMultiplier = i2813[3]
  i2812.constantMin = i2813[4]
  i2812.constantMax = i2813[5]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2814 = root || new pc.MinMaxGradient()
  var i2815 = data
  i2814.mode = i2815[0]
  i2814.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2815[1], i2814.gradientMin)
  i2814.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2815[2], i2814.gradientMax)
  i2814.colorMin = new pc.Color(i2815[3], i2815[4], i2815[5], i2815[6])
  i2814.colorMax = new pc.Color(i2815[7], i2815[8], i2815[9], i2815[10])
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2817 = data
  i2816.mode = i2817[0]
  var i2819 = i2817[1]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2819[i + 0]) );
  }
  i2816.colorKeys = i2818
  var i2821 = i2817[2]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2821[i + 0]) );
  }
  i2816.alphaKeys = i2820
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2822 = root || new pc.ParticleSystemColorBySpeed()
  var i2823 = data
  i2822.enabled = !!i2823[0]
  i2822.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2823[1], i2822.color)
  i2822.range = new pc.Vec2( i2823[2], i2823[3] )
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2827 = data
  i2826.color = new pc.Color(i2827[0], i2827[1], i2827[2], i2827[3])
  i2826.time = i2827[4]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2831 = data
  i2830.alpha = i2831[0]
  i2830.time = i2831[1]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2832 = root || new pc.ParticleSystemColorOverLifetime()
  var i2833 = data
  i2832.enabled = !!i2833[0]
  i2832.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2833[1], i2832.color)
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2834 = root || new pc.ParticleSystemEmitter()
  var i2835 = data
  i2834.enabled = !!i2835[0]
  i2834.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[1], i2834.rateOverTime)
  i2834.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2835[2], i2834.rateOverDistance)
  var i2837 = i2835[3]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2837[i + 0]) );
  }
  i2834.bursts = i2836
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2840 = root || new pc.ParticleSystemBurst()
  var i2841 = data
  i2840.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2841[0], i2840.count)
  i2840.cycleCount = i2841[1]
  i2840.minCount = i2841[2]
  i2840.maxCount = i2841[3]
  i2840.repeatInterval = i2841[4]
  i2840.time = i2841[5]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2842 = root || new pc.ParticleSystemRotationBySpeed()
  var i2843 = data
  i2842.enabled = !!i2843[0]
  i2842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2843[1], i2842.x)
  i2842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2843[2], i2842.y)
  i2842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2843[3], i2842.z)
  i2842.separateAxes = !!i2843[4]
  i2842.range = new pc.Vec2( i2843[5], i2843[6] )
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2844 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2845 = data
  i2844.enabled = !!i2845[0]
  i2844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2845[1], i2844.x)
  i2844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2845[2], i2844.y)
  i2844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2845[3], i2844.z)
  i2844.separateAxes = !!i2845[4]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2846 = root || new pc.ParticleSystemShape()
  var i2847 = data
  i2846.enabled = !!i2847[0]
  i2846.shapeType = i2847[1]
  i2846.randomDirectionAmount = i2847[2]
  i2846.sphericalDirectionAmount = i2847[3]
  i2846.randomPositionAmount = i2847[4]
  i2846.alignToDirection = !!i2847[5]
  i2846.radius = i2847[6]
  i2846.radiusMode = i2847[7]
  i2846.radiusSpread = i2847[8]
  i2846.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2847[9], i2846.radiusSpeed)
  i2846.radiusThickness = i2847[10]
  i2846.angle = i2847[11]
  i2846.length = i2847[12]
  i2846.boxThickness = new pc.Vec3( i2847[13], i2847[14], i2847[15] )
  i2846.meshShapeType = i2847[16]
  request.r(i2847[17], i2847[18], 0, i2846, 'mesh')
  request.r(i2847[19], i2847[20], 0, i2846, 'meshRenderer')
  request.r(i2847[21], i2847[22], 0, i2846, 'skinnedMeshRenderer')
  i2846.useMeshMaterialIndex = !!i2847[23]
  i2846.meshMaterialIndex = i2847[24]
  i2846.useMeshColors = !!i2847[25]
  i2846.normalOffset = i2847[26]
  i2846.arc = i2847[27]
  i2846.arcMode = i2847[28]
  i2846.arcSpread = i2847[29]
  i2846.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2847[30], i2846.arcSpeed)
  i2846.donutRadius = i2847[31]
  i2846.position = new pc.Vec3( i2847[32], i2847[33], i2847[34] )
  i2846.rotation = new pc.Vec3( i2847[35], i2847[36], i2847[37] )
  i2846.scale = new pc.Vec3( i2847[38], i2847[39], i2847[40] )
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2848 = root || new pc.ParticleSystemSizeBySpeed()
  var i2849 = data
  i2848.enabled = !!i2849[0]
  i2848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[1], i2848.x)
  i2848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[2], i2848.y)
  i2848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2849[3], i2848.z)
  i2848.separateAxes = !!i2849[4]
  i2848.range = new pc.Vec2( i2849[5], i2849[6] )
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2850 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2851 = data
  i2850.enabled = !!i2851[0]
  i2850.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[1], i2850.x)
  i2850.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[2], i2850.y)
  i2850.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2851[3], i2850.z)
  i2850.separateAxes = !!i2851[4]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2852 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2853 = data
  i2852.enabled = !!i2853[0]
  i2852.mode = i2853[1]
  i2852.animation = i2853[2]
  i2852.numTilesX = i2853[3]
  i2852.numTilesY = i2853[4]
  i2852.useRandomRow = !!i2853[5]
  i2852.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2853[6], i2852.frameOverTime)
  i2852.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2853[7], i2852.startFrame)
  i2852.cycleCount = i2853[8]
  i2852.rowIndex = i2853[9]
  i2852.flipU = i2853[10]
  i2852.flipV = i2853[11]
  i2852.spriteCount = i2853[12]
  var i2855 = i2853[13]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 2) {
  request.r(i2855[i + 0], i2855[i + 1], 2, i2854, '')
  }
  i2852.sprites = i2854
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2858 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2859 = data
  i2858.enabled = !!i2859[0]
  i2858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[1], i2858.x)
  i2858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[2], i2858.y)
  i2858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[3], i2858.z)
  i2858.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[4], i2858.radial)
  i2858.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[5], i2858.speedModifier)
  i2858.space = i2859[6]
  i2858.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[7], i2858.orbitalX)
  i2858.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[8], i2858.orbitalY)
  i2858.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[9], i2858.orbitalZ)
  i2858.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[10], i2858.orbitalOffsetX)
  i2858.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[11], i2858.orbitalOffsetY)
  i2858.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2859[12], i2858.orbitalOffsetZ)
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2860 = root || new pc.ParticleSystemNoise()
  var i2861 = data
  i2860.enabled = !!i2861[0]
  i2860.separateAxes = !!i2861[1]
  i2860.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[2], i2860.strengthX)
  i2860.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[3], i2860.strengthY)
  i2860.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[4], i2860.strengthZ)
  i2860.frequency = i2861[5]
  i2860.damping = !!i2861[6]
  i2860.octaveCount = i2861[7]
  i2860.octaveMultiplier = i2861[8]
  i2860.octaveScale = i2861[9]
  i2860.quality = i2861[10]
  i2860.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[11], i2860.scrollSpeed)
  i2860.scrollSpeedMultiplier = i2861[12]
  i2860.remapEnabled = !!i2861[13]
  i2860.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[14], i2860.remapX)
  i2860.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[15], i2860.remapY)
  i2860.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[16], i2860.remapZ)
  i2860.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[17], i2860.positionAmount)
  i2860.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[18], i2860.rotationAmount)
  i2860.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2861[19], i2860.sizeAmount)
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2862 = root || new pc.ParticleSystemInheritVelocity()
  var i2863 = data
  i2862.enabled = !!i2863[0]
  i2862.mode = i2863[1]
  i2862.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2863[2], i2862.curve)
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2864 = root || new pc.ParticleSystemForceOverLifetime()
  var i2865 = data
  i2864.enabled = !!i2865[0]
  i2864.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2865[1], i2864.x)
  i2864.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2865[2], i2864.y)
  i2864.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2865[3], i2864.z)
  i2864.space = i2865[4]
  i2864.randomized = !!i2865[5]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2866 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2867 = data
  i2866.enabled = !!i2867[0]
  i2866.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2867[1], i2866.limit)
  i2866.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2867[2], i2866.limitX)
  i2866.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2867[3], i2866.limitY)
  i2866.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2867[4], i2866.limitZ)
  i2866.dampen = i2867[5]
  i2866.separateAxes = !!i2867[6]
  i2866.space = i2867[7]
  i2866.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2867[8], i2866.drag)
  i2866.multiplyDragByParticleSize = !!i2867[9]
  i2866.multiplyDragByParticleVelocity = !!i2867[10]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2869 = data
  i2868.enabled = !!i2869[0]
  request.r(i2869[1], i2869[2], 0, i2868, 'sharedMaterial')
  var i2871 = i2869[3]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 2) {
  request.r(i2871[i + 0], i2871[i + 1], 2, i2870, '')
  }
  i2868.sharedMaterials = i2870
  i2868.receiveShadows = !!i2869[4]
  i2868.shadowCastingMode = i2869[5]
  i2868.sortingLayerID = i2869[6]
  i2868.sortingOrder = i2869[7]
  i2868.lightmapIndex = i2869[8]
  i2868.lightmapSceneIndex = i2869[9]
  i2868.lightmapScaleOffset = new pc.Vec4( i2869[10], i2869[11], i2869[12], i2869[13] )
  i2868.lightProbeUsage = i2869[14]
  i2868.reflectionProbeUsage = i2869[15]
  request.r(i2869[16], i2869[17], 0, i2868, 'mesh')
  i2868.meshCount = i2869[18]
  i2868.activeVertexStreamsCount = i2869[19]
  i2868.alignment = i2869[20]
  i2868.renderMode = i2869[21]
  i2868.sortMode = i2869[22]
  i2868.lengthScale = i2869[23]
  i2868.velocityScale = i2869[24]
  i2868.cameraVelocityScale = i2869[25]
  i2868.normalDirection = i2869[26]
  i2868.sortingFudge = i2869[27]
  i2868.minParticleSize = i2869[28]
  i2868.maxParticleSize = i2869[29]
  i2868.pivot = new pc.Vec3( i2869[30], i2869[31], i2869[32] )
  request.r(i2869[33], i2869[34], 0, i2868, 'trailMaterial')
  return i2868
}

Deserializers["EffectObj"] = function (request, data, root) {
  var i2872 = root || request.c( 'EffectObj' )
  var i2873 = data
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2875 = data
  i2874.name = i2875[0]
  i2874.halfPrecision = !!i2875[1]
  i2874.useUInt32IndexFormat = !!i2875[2]
  i2874.vertexCount = i2875[3]
  i2874.aabb = i2875[4]
  var i2877 = i2875[5]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( !!i2877[i + 0] );
  }
  i2874.streams = i2876
  i2874.vertices = i2875[6]
  var i2879 = i2875[7]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2879[i + 0]) );
  }
  i2874.subMeshes = i2878
  var i2881 = i2875[8]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 16) {
    i2880.push( new pc.Mat4().setData(i2881[i + 0], i2881[i + 1], i2881[i + 2], i2881[i + 3],  i2881[i + 4], i2881[i + 5], i2881[i + 6], i2881[i + 7],  i2881[i + 8], i2881[i + 9], i2881[i + 10], i2881[i + 11],  i2881[i + 12], i2881[i + 13], i2881[i + 14], i2881[i + 15]) );
  }
  i2874.bindposes = i2880
  var i2883 = i2875[9]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2883[i + 0]) );
  }
  i2874.blendShapes = i2882
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2889 = data
  i2888.triangles = i2889[0]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2895 = data
  i2894.name = i2895[0]
  var i2897 = i2895[1]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2897[i + 0]) );
  }
  i2894.frames = i2896
  return i2894
}

Deserializers["BoosterMoveDestroy"] = function (request, data, root) {
  var i2898 = root || request.c( 'BoosterMoveDestroy' )
  var i2899 = data
  i2898.speed = i2899[0]
  i2898.horizontal = !!i2899[1]
  return i2898
}

Deserializers["BombItem"] = function (request, data, root) {
  var i2900 = root || request.c( 'BombItem' )
  var i2901 = data
  request.r(i2901[0], i2901[1], 0, i2900, 'bugStandObj')
  request.r(i2901[2], i2901[3], 0, i2900, 'eff_warning')
  request.r(i2901[4], i2901[5], 0, i2900, 'stepText')
  return i2900
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2902 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2903 = data
  i2902.m_UiScaleMode = i2903[0]
  i2902.m_ReferencePixelsPerUnit = i2903[1]
  i2902.m_ScaleFactor = i2903[2]
  i2902.m_ReferenceResolution = new pc.Vec2( i2903[3], i2903[4] )
  i2902.m_ScreenMatchMode = i2903[5]
  i2902.m_MatchWidthOrHeight = i2903[6]
  i2902.m_PhysicalUnit = i2903[7]
  i2902.m_FallbackScreenDPI = i2903[8]
  i2902.m_DefaultSpriteDPI = i2903[9]
  i2902.m_DynamicPixelsPerUnit = i2903[10]
  i2902.m_PresetInfoIsWorld = !!i2903[11]
  return i2902
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2904 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2905 = data
  i2904.m_IgnoreReversedGraphics = !!i2905[0]
  i2904.m_BlockingObjects = i2905[1]
  i2904.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2905[2] )
  return i2904
}

Deserializers["CurveMove"] = function (request, data, root) {
  var i2906 = root || request.c( 'CurveMove' )
  var i2907 = data
  i2906.speed = i2907[0]
  return i2906
}

Deserializers["Piece"] = function (request, data, root) {
  var i2908 = root || request.c( 'Piece' )
  var i2909 = data
  request.r(i2909[0], i2909[1], 0, i2908, 'pieceCheckPlaceBoard')
  i2908.isClone = !!i2909[2]
  i2908.CanSeleted = !!i2909[3]
  i2908.possiblePlacementPos = new pc.Vec3( i2909[4], i2909[5], i2909[6] )
  i2908.blockScale = i2909[7]
  i2908.pieceID = i2909[8]
  var i2911 = i2909[9]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('PieceShape', i2911[i + 0]) );
  }
  i2908.pieceShapes = i2910
  var i2913 = i2909[10]
  var i2912 = new (System.Collections.Generic.List$1(Bridge.ns('BlockObj')))
  for(var i = 0; i < i2913.length; i += 2) {
  request.r(i2913[i + 0], i2913[i + 1], 1, i2912, '')
  }
  i2908.blockObjs = i2912
  var i2915 = i2909[11]
  var i2914 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i2915.length; i += 2) {
  request.r(i2915[i + 0], i2915[i + 1], 1, i2914, '')
  }
  i2908.blocksOnBoard = i2914
  var i2917 = i2909[12]
  var i2916 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i2917.length; i += 2) {
  request.r(i2917[i + 0], i2917[i + 1], 1, i2916, '')
  }
  i2908.blocksOnBoardHightLight = i2916
  var i2919 = i2909[13]
  var i2918 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.add(i2919[i + 0]);
  }
  i2908.dstList = i2918
  i2908.color = i2909[14]
  i2908.hexaBlock = !!i2909[15]
  return i2908
}

Deserializers["PieceShape"] = function (request, data, root) {
  var i2922 = root || request.c( 'PieceShape' )
  var i2923 = data
  i2922.shapes = i2923[0]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2929 = data
  i2928.center = new pc.Vec3( i2929[0], i2929[1], i2929[2] )
  i2928.size = new pc.Vec3( i2929[3], i2929[4], i2929[5] )
  i2928.enabled = !!i2929[6]
  i2928.isTrigger = !!i2929[7]
  request.r(i2929[8], i2929[9], 0, i2928, 'material')
  return i2928
}

Deserializers["TutorialPointerBehaviour"] = function (request, data, root) {
  var i2930 = root || request.c( 'TutorialPointerBehaviour' )
  var i2931 = data
  request.r(i2931[0], i2931[1], 0, i2930, 'dragStartTrans')
  request.r(i2931[2], i2931[3], 0, i2930, 'anim')
  i2930.dragAnimLength = i2931[4]
  i2930.offset = new pc.Vec3( i2931[5], i2931[6], i2931[7] )
  var i2933 = i2931[8]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 2) {
  request.r(i2933[i + 0], i2933[i + 1], 2, i2932, '')
  }
  i2930.moveableTransforms = i2932
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2937 = data
  request.r(i2937[0], i2937[1], 0, i2936, 'animatorController')
  request.r(i2937[2], i2937[3], 0, i2936, 'avatar')
  i2936.updateMode = i2937[4]
  i2936.hasTransformHierarchy = !!i2937[5]
  i2936.applyRootMotion = !!i2937[6]
  var i2939 = i2937[7]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 2) {
  request.r(i2939[i + 0], i2939[i + 1], 2, i2938, '')
  }
  i2936.humanBones = i2938
  i2936.enabled = !!i2937[8]
  return i2936
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2940 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2941 = data
  i2940.m_Spacing = i2941[0]
  i2940.m_ChildForceExpandWidth = !!i2941[1]
  i2940.m_ChildForceExpandHeight = !!i2941[2]
  i2940.m_ChildControlWidth = !!i2941[3]
  i2940.m_ChildControlHeight = !!i2941[4]
  i2940.m_ChildScaleWidth = !!i2941[5]
  i2940.m_ChildScaleHeight = !!i2941[6]
  i2940.m_ReverseArrangement = !!i2941[7]
  i2940.m_Padding = UnityEngine.RectOffset.FromPaddings(i2941[8], i2941[9], i2941[10], i2941[11])
  i2940.m_ChildAlignment = i2941[12]
  return i2940
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2942 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2943 = data
  i2942.m_IgnoreLayout = !!i2943[0]
  i2942.m_MinWidth = i2943[1]
  i2942.m_MinHeight = i2943[2]
  i2942.m_PreferredWidth = i2943[3]
  i2942.m_PreferredHeight = i2943[4]
  i2942.m_FlexibleWidth = i2943[5]
  i2942.m_FlexibleHeight = i2943[6]
  i2942.m_LayoutPriority = i2943[7]
  return i2942
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2944 = root || request.c( 'UnityEngine.UI.Button' )
  var i2945 = data
  i2944.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2945[0], i2944.m_OnClick)
  i2944.m_Navigation = request.d('UnityEngine.UI.Navigation', i2945[1], i2944.m_Navigation)
  i2944.m_Transition = i2945[2]
  i2944.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2945[3], i2944.m_Colors)
  i2944.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2945[4], i2944.m_SpriteState)
  i2944.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2945[5], i2944.m_AnimationTriggers)
  i2944.m_Interactable = !!i2945[6]
  request.r(i2945[7], i2945[8], 0, i2944, 'm_TargetGraphic')
  return i2944
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2946 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2947 = data
  i2946.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2947[0], i2946.m_PersistentCalls)
  return i2946
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2948 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2949 = data
  var i2951 = i2949[0]
  var i2950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.add(request.d('UnityEngine.Events.PersistentCall', i2951[i + 0]));
  }
  i2948.m_Calls = i2950
  return i2948
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2954 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2955 = data
  request.r(i2955[0], i2955[1], 0, i2954, 'm_Target')
  i2954.m_TargetAssemblyTypeName = i2955[2]
  i2954.m_MethodName = i2955[3]
  i2954.m_Mode = i2955[4]
  i2954.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2955[5], i2954.m_Arguments)
  i2954.m_CallState = i2955[6]
  return i2954
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2956 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2957 = data
  i2956.m_Mode = i2957[0]
  i2956.m_WrapAround = !!i2957[1]
  request.r(i2957[2], i2957[3], 0, i2956, 'm_SelectOnUp')
  request.r(i2957[4], i2957[5], 0, i2956, 'm_SelectOnDown')
  request.r(i2957[6], i2957[7], 0, i2956, 'm_SelectOnLeft')
  request.r(i2957[8], i2957[9], 0, i2956, 'm_SelectOnRight')
  return i2956
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2958 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2959 = data
  i2958.m_NormalColor = new pc.Color(i2959[0], i2959[1], i2959[2], i2959[3])
  i2958.m_HighlightedColor = new pc.Color(i2959[4], i2959[5], i2959[6], i2959[7])
  i2958.m_PressedColor = new pc.Color(i2959[8], i2959[9], i2959[10], i2959[11])
  i2958.m_SelectedColor = new pc.Color(i2959[12], i2959[13], i2959[14], i2959[15])
  i2958.m_DisabledColor = new pc.Color(i2959[16], i2959[17], i2959[18], i2959[19])
  i2958.m_ColorMultiplier = i2959[20]
  i2958.m_FadeDuration = i2959[21]
  return i2958
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2960 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2961 = data
  request.r(i2961[0], i2961[1], 0, i2960, 'm_HighlightedSprite')
  request.r(i2961[2], i2961[3], 0, i2960, 'm_PressedSprite')
  request.r(i2961[4], i2961[5], 0, i2960, 'm_SelectedSprite')
  request.r(i2961[6], i2961[7], 0, i2960, 'm_DisabledSprite')
  return i2960
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2962 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2963 = data
  i2962.m_NormalTrigger = i2963[0]
  i2962.m_HighlightedTrigger = i2963[1]
  i2962.m_PressedTrigger = i2963[2]
  i2962.m_SelectedTrigger = i2963[3]
  i2962.m_DisabledTrigger = i2963[4]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2965 = data
  i2964.name = i2965[0]
  i2964.atlasId = i2965[1]
  i2964.mipmapCount = i2965[2]
  i2964.hdr = !!i2965[3]
  i2964.size = i2965[4]
  i2964.anisoLevel = i2965[5]
  i2964.filterMode = i2965[6]
  var i2967 = i2965[7]
  var i2966 = []
  for(var i = 0; i < i2967.length; i += 4) {
    i2966.push( UnityEngine.Rect.MinMaxRect(i2967[i + 0], i2967[i + 1], i2967[i + 2], i2967[i + 3]) );
  }
  i2964.rects = i2966
  i2964.wrapU = i2965[8]
  i2964.wrapV = i2965[9]
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2971 = data
  i2970.name = i2971[0]
  i2970.index = i2971[1]
  i2970.startup = !!i2971[2]
  return i2970
}

Deserializers["MenuScreen"] = function (request, data, root) {
  var i2972 = root || request.c( 'MenuScreen' )
  var i2973 = data
  var i2975 = i2973[0]
  var i2974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2975.length; i += 2) {
  request.r(i2975[i + 0], i2975[i + 1], 1, i2974, '')
  }
  i2972.boardPlaying = i2974
  var i2977 = i2973[1]
  var i2976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2977.length; i += 2) {
  request.r(i2977[i + 0], i2977[i + 1], 1, i2976, '')
  }
  i2972.gameModeSelectObj = i2976
  var i2979 = i2973[2]
  var i2978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2979.length; i += 2) {
  request.r(i2979[i + 0], i2979[i + 1], 1, i2978, '')
  }
  i2972.boardsSelected = i2978
  i2972.currentMode = i2973[3]
  i2972.currentBoard = i2973[4]
  i2972.id = i2973[5]
  i2972.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i2973[6], i2972.showTransition)
  i2972.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i2973[7], i2972.hideTransition)
  return i2972
}

Deserializers["ScreenFrameWork.Screen+TransitionInfo"] = function (request, data, root) {
  var i2982 = root || request.c( 'ScreenFrameWork.Screen+TransitionInfo' )
  var i2983 = data
  i2982.animate = !!i2983[0]
  i2982.animationType = i2983[1]
  i2982.animationDuration = i2983[2]
  i2982.animationStyle = i2983[3]
  i2982.animationCurve = new pc.AnimationCurve( { keys_flow: i2983[4] } )
  i2982.onTransition = request.d('ScreenFrameWork.Screen+OnTransitionEvent', i2983[5], i2982.onTransition)
  return i2982
}

Deserializers["ScreenFrameWork.Screen+OnTransitionEvent"] = function (request, data, root) {
  var i2984 = root || request.c( 'ScreenFrameWork.Screen+OnTransitionEvent' )
  var i2985 = data
  i2984.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2985[0], i2984.m_PersistentCalls)
  return i2984
}

Deserializers["AdjustRectTransformForSafeArea"] = function (request, data, root) {
  var i2986 = root || request.c( 'AdjustRectTransformForSafeArea' )
  var i2987 = data
  i2986.widthScreenSafe = i2987[0]
  i2986.heightScreenSafe = i2987[1]
  i2986.resolution = i2987[2]
  i2986.adjustForBannerAd = !!i2987[3]
  i2986.bannerHeightMobile = i2987[4]
  i2986.bannerHeightLarge2 = i2987[5]
  i2986.bannerHeightTable = i2987[6]
  i2986.ratio = i2987[7]
  i2986.originOffSetMax = new pc.Vec2( i2987[8], i2987[9] )
  i2986.originOffSetMin = new pc.Vec2( i2987[10], i2987[11] )
  i2986.addWidthScreenNormal = i2987[12]
  i2986.addHeightScreenNormal = i2987[13]
  i2986.addWidthScreenRatioLarge2 = i2987[14]
  i2986.addHeightcreenRatioLarge2 = i2987[15]
  i2986.addOffSetMaxLarge2 = new pc.Vec2( i2987[16], i2987[17] )
  i2986.addOffSetMinLarge2 = new pc.Vec2( i2987[18], i2987[19] )
  i2986.addWidthScreenRatioEqual2 = i2987[20]
  i2986.addHeightcreenRatioEqual2 = i2987[21]
  i2986.addOffSetMaxEqual2 = new pc.Vec2( i2987[22], i2987[23] )
  i2986.addOffSetMinEqual2 = new pc.Vec2( i2987[24], i2987[25] )
  i2986.addWidthScreenRatioTablet = i2987[26]
  i2986.addHeightcreenRatioTablet = i2987[27]
  i2986.addOffSetMaxTablet = new pc.Vec2( i2987[28], i2987[29] )
  i2986.addOffSetMinTablet = new pc.Vec2( i2987[30], i2987[31] )
  return i2986
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2988 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2989 = data
  i2988.m_Spacing = i2989[0]
  i2988.m_ChildForceExpandWidth = !!i2989[1]
  i2988.m_ChildForceExpandHeight = !!i2989[2]
  i2988.m_ChildControlWidth = !!i2989[3]
  i2988.m_ChildControlHeight = !!i2989[4]
  i2988.m_ChildScaleWidth = !!i2989[5]
  i2988.m_ChildScaleHeight = !!i2989[6]
  i2988.m_ReverseArrangement = !!i2989[7]
  i2988.m_Padding = UnityEngine.RectOffset.FromPaddings(i2989[8], i2989[9], i2989[10], i2989[11])
  i2988.m_ChildAlignment = i2989[12]
  return i2988
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2990 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2991 = data
  request.r(i2991[0], i2991[1], 0, i2990, 'm_ObjectArgument')
  i2990.m_ObjectArgumentAssemblyTypeName = i2991[2]
  i2990.m_IntArgument = i2991[3]
  i2990.m_FloatArgument = i2991[4]
  i2990.m_StringArgument = i2991[5]
  i2990.m_BoolArgument = !!i2991[6]
  return i2990
}

Deserializers["SoundButton"] = function (request, data, root) {
  var i2992 = root || request.c( 'SoundButton' )
  var i2993 = data
  return i2992
}

Deserializers["LayoutSupportDisplay"] = function (request, data, root) {
  var i2994 = root || request.c( 'LayoutSupportDisplay' )
  var i2995 = data
  i2994.layoutSupportType = i2995[0]
  request.r(i2995[1], i2995[2], 0, i2994, 'rectTarget')
  i2994.layoutNormalRatio = request.d('LayoutSupportDisplay+LayoutValue', i2995[3], i2994.layoutNormalRatio)
  i2994.layoutLarge2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i2995[4], i2994.layoutLarge2Ratio)
  i2994.layoutEqual2Ratio = request.d('LayoutSupportDisplay+LayoutValue', i2995[5], i2994.layoutEqual2Ratio)
  i2994.layoutTabletRatio = request.d('LayoutSupportDisplay+LayoutValue', i2995[6], i2994.layoutTabletRatio)
  i2994.layoutGroupNormalRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i2995[7], i2994.layoutGroupNormalRatio)
  i2994.layoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i2995[8], i2994.layoutGroupLarge2Ratio)
  i2994.layoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i2995[9], i2994.layoutGroupEqual2Ratio)
  i2994.layoutGroupTabletRatio = request.d('LayoutSupportDisplay+HorizontalOrVerticalLayoutValue', i2995[10], i2994.layoutGroupTabletRatio)
  i2994.gridLayoutGroupNormalRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i2995[11], i2994.gridLayoutGroupNormalRatio)
  i2994.gridLayoutGroupLarge2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i2995[12], i2994.gridLayoutGroupLarge2Ratio)
  i2994.gridLayoutGroupEqual2Ratio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i2995[13], i2994.gridLayoutGroupEqual2Ratio)
  i2994.gridLayoutGroupTabletRatio = request.d('LayoutSupportDisplay+GridLayoutGroupValue', i2995[14], i2994.gridLayoutGroupTabletRatio)
  return i2994
}

Deserializers["LayoutSupportDisplay+LayoutValue"] = function (request, data, root) {
  var i2996 = root || request.c( 'LayoutSupportDisplay+LayoutValue' )
  var i2997 = data
  i2996.minWidth = i2997[0]
  i2996.minHeight = i2997[1]
  i2996.useDefaultValue = !!i2997[2]
  i2996.useRateRect = !!i2997[3]
  return i2996
}

Deserializers["LayoutSupportDisplay+HorizontalOrVerticalLayoutValue"] = function (request, data, root) {
  var i2998 = root || request.c( 'LayoutSupportDisplay+HorizontalOrVerticalLayoutValue' )
  var i2999 = data
  i2998.left = i2999[0]
  i2998.right = i2999[1]
  i2998.top = i2999[2]
  i2998.bottom = i2999[3]
  i2998.spacing = i2999[4]
  i2998.useDefaultValue = !!i2999[5]
  return i2998
}

Deserializers["LayoutSupportDisplay+GridLayoutGroupValue"] = function (request, data, root) {
  var i3000 = root || request.c( 'LayoutSupportDisplay+GridLayoutGroupValue' )
  var i3001 = data
  i3000.left = i3001[0]
  i3000.right = i3001[1]
  i3000.top = i3001[2]
  i3000.bottom = i3001[3]
  i3000.cellsize = new pc.Vec2( i3001[4], i3001[5] )
  i3000.spacing = new pc.Vec2( i3001[6], i3001[7] )
  i3000.useDefaultValue = !!i3001[8]
  return i3000
}

Deserializers["UIAnimation"] = function (request, data, root) {
  var i3002 = root || request.c( 'UIAnimation' )
  var i3003 = data
  i3002.id = i3003[0]
  i3002.type = i3003[1]
  i3002.loopType = i3003[2]
  i3002.style = i3003[3]
  i3002.duration = i3003[4]
  i3002.startDelay = i3003[5]
  i3002.startOnFirstFrame = !!i3003[6]
  i3002.useCurrentFrom = !!i3003[7]
  i3002.playOnStart = !!i3003[8]
  i3002.animationCurve = new pc.AnimationCurve( { keys_flow: i3003[9] } )
  i3002.elapsedTime = i3003[10]
  i3002.fromValue = i3003[11]
  i3002.toValue = i3003[12]
  i3002.fromColor = new pc.Color(i3003[13], i3003[14], i3003[15], i3003[16])
  i3002.toColor = new pc.Color(i3003[17], i3003[18], i3003[19], i3003[20])
  return i3002
}

Deserializers["GameScreen"] = function (request, data, root) {
  var i3004 = root || request.c( 'GameScreen' )
  var i3005 = data
  i3004.id = i3005[0]
  i3004.showTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i3005[1], i3004.showTransition)
  i3004.hideTransition = request.d('ScreenFrameWork.Screen+TransitionInfo', i3005[2], i3004.hideTransition)
  return i3004
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.UI.Text' )
  var i3007 = data
  i3006.m_FontData = request.d('UnityEngine.UI.FontData', i3007[0], i3006.m_FontData)
  i3006.m_Text = i3007[1]
  request.r(i3007[2], i3007[3], 0, i3006, 'm_Material')
  i3006.m_Maskable = !!i3007[4]
  i3006.m_Color = new pc.Color(i3007[5], i3007[6], i3007[7], i3007[8])
  i3006.m_RaycastTarget = !!i3007[9]
  i3006.m_RaycastPadding = new pc.Vec4( i3007[10], i3007[11], i3007[12], i3007[13] )
  return i3006
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3009 = data
  request.r(i3009[0], i3009[1], 0, i3008, 'm_Font')
  i3008.m_FontSize = i3009[2]
  i3008.m_FontStyle = i3009[3]
  i3008.m_BestFit = !!i3009[4]
  i3008.m_MinSize = i3009[5]
  i3008.m_MaxSize = i3009[6]
  i3008.m_Alignment = i3009[7]
  i3008.m_AlignByGeometry = !!i3009[8]
  i3008.m_RichText = !!i3009[9]
  i3008.m_HorizontalOverflow = i3009[10]
  i3008.m_VerticalOverflow = i3009[11]
  i3008.m_LineSpacing = i3009[12]
  return i3008
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i3011 = data
  i3010.m_EffectColor = new pc.Color(i3011[0], i3011[1], i3011[2], i3011[3])
  i3010.m_EffectDistance = new pc.Vec2( i3011[4], i3011[5] )
  i3010.m_UseGraphicAlpha = !!i3011[6]
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3013 = data
  i3012.m_Alpha = i3013[0]
  i3012.m_Interactable = !!i3013[1]
  i3012.m_BlocksRaycasts = !!i3013[2]
  i3012.m_IgnoreParentGroups = !!i3013[3]
  i3012.enabled = !!i3013[4]
  return i3012
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i3015 = data
  i3014.m_AspectMode = i3015[0]
  i3014.m_AspectRatio = i3015[1]
  return i3014
}

Deserializers["RectTransformByOrientation"] = function (request, data, root) {
  var i3016 = root || request.c( 'RectTransformByOrientation' )
  var i3017 = data
  i3016.portraitScale = new pc.Vec3( i3017[0], i3017[1], i3017[2] )
  i3016.landscapeScale = new pc.Vec3( i3017[3], i3017[4], i3017[5] )
  return i3016
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i3018 = root || request.c( 'DOTWeenPulseAnim' )
  var i3019 = data
  i3018.pulseSize = new pc.Vec2( i3019[0], i3019[1] )
  i3018.pulseDuration = i3019[2]
  i3018.ease = i3019[3]
  return i3018
}

Deserializers["TransformByOrientation"] = function (request, data, root) {
  var i3020 = root || request.c( 'TransformByOrientation' )
  var i3021 = data
  request.r(i3021[0], i3021[1], 0, i3020, 'portraitTrans')
  request.r(i3021[2], i3021[3], 0, i3020, 'landscapeTrans')
  i3020.tossOut = !!i3021[4]
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i3023 = data
  i3022.enabled = !!i3023[0]
  i3022.sortingLayerIndex = i3023[1]
  i3022.sortingOrder = i3023[2]
  i3022.sortingLayerName = i3023[3]
  return i3022
}

Deserializers["PopUpFrameWork.Popup"] = function (request, data, root) {
  var i3024 = root || request.c( 'PopUpFrameWork.Popup' )
  var i3025 = data
  i3024.canAndroidBackClosePopup = !!i3025[0]
  i3024.animDuration = i3025[1]
  i3024.animType = i3025[2]
  i3024.animCurve = new pc.AnimationCurve( { keys_flow: i3025[3] } )
  request.r(i3025[4], i3025[5], 0, i3024, 'animContainer')
  return i3024
}

Deserializers["SecondChancePopup"] = function (request, data, root) {
  var i3026 = root || request.c( 'SecondChancePopup' )
  var i3027 = data
  request.r(i3027[0], i3027[1], 0, i3026, 'durationText')
  request.r(i3027[2], i3027[3], 0, i3026, 'popupSecondChance')
  request.r(i3027[4], i3027[5], 0, i3026, 'fillSecondChance')
  i3026.canAndroidBackClosePopup = !!i3027[6]
  i3026.animDuration = i3027[7]
  i3026.animType = i3027[8]
  i3026.animCurve = new pc.AnimationCurve( { keys_flow: i3027[9] } )
  request.r(i3027[10], i3027[11], 0, i3026, 'animContainer')
  return i3026
}

Deserializers["SettingPopup"] = function (request, data, root) {
  var i3028 = root || request.c( 'SettingPopup' )
  var i3029 = data
  request.r(i3029[0], i3029[1], 0, i3028, 'on')
  request.r(i3029[2], i3029[3], 0, i3028, 'off')
  request.r(i3029[4], i3029[5], 0, i3028, 'musicIcon')
  request.r(i3029[6], i3029[7], 0, i3028, 'soundIcon')
  i3028.rateURL = i3029[8]
  i3028.canAndroidBackClosePopup = !!i3029[9]
  i3028.animDuration = i3029[10]
  i3028.animType = i3029[11]
  i3028.animCurve = new pc.AnimationCurve( { keys_flow: i3029[12] } )
  request.r(i3029[13], i3029[14], 0, i3028, 'animContainer')
  return i3028
}

Deserializers["GameOverPopup"] = function (request, data, root) {
  var i3030 = root || request.c( 'GameOverPopup' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, 'scoreText')
  request.r(i3031[2], i3031[3], 0, i3030, 'bestScoreText')
  i3030.canAndroidBackClosePopup = !!i3031[4]
  i3030.animDuration = i3031[5]
  i3030.animType = i3031[6]
  i3030.animCurve = new pc.AnimationCurve( { keys_flow: i3031[7] } )
  request.r(i3031[8], i3031[9], 0, i3030, 'animContainer')
  return i3030
}

Deserializers["FadeOutCanvasGroup"] = function (request, data, root) {
  var i3032 = root || request.c( 'FadeOutCanvasGroup' )
  var i3033 = data
  request.r(i3033[0], i3033[1], 0, i3032, 'canvasGroup')
  i3032.fadeOutTime = i3033[2]
  i3032.deactivateOnFinish = !!i3033[3]
  i3032.fadeInOnActivation = !!i3033[4]
  return i3032
}

Deserializers["UnityEventOnEnable"] = function (request, data, root) {
  var i3034 = root || request.c( 'UnityEventOnEnable' )
  var i3035 = data
  i3034.events = request.d('UnityEngine.Events.UnityEvent', i3035[0], i3034.events)
  return i3034
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3036 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3037 = data
  i3036.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3037[0], i3036.m_PersistentCalls)
  return i3036
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3038 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3039 = data
  request.r(i3039[0], i3039[1], 0, i3038, 'm_FirstSelected')
  i3038.m_sendNavigationEvents = !!i3039[2]
  i3038.m_DragThreshold = i3039[3]
  return i3038
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3040 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3041 = data
  i3040.m_HorizontalAxis = i3041[0]
  i3040.m_VerticalAxis = i3041[1]
  i3040.m_SubmitButton = i3041[2]
  i3040.m_CancelButton = i3041[3]
  i3040.m_InputActionsPerSecond = i3041[4]
  i3040.m_RepeatDelay = i3041[5]
  i3040.m_ForceModuleActive = !!i3041[6]
  i3040.m_SendPointerHoverToParent = !!i3041[7]
  return i3040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3043 = data
  i3042.enabled = !!i3043[0]
  i3042.aspect = i3043[1]
  i3042.orthographic = !!i3043[2]
  i3042.orthographicSize = i3043[3]
  i3042.backgroundColor = new pc.Color(i3043[4], i3043[5], i3043[6], i3043[7])
  i3042.nearClipPlane = i3043[8]
  i3042.farClipPlane = i3043[9]
  i3042.fieldOfView = i3043[10]
  i3042.depth = i3043[11]
  i3042.clearFlags = i3043[12]
  i3042.cullingMask = i3043[13]
  i3042.rect = i3043[14]
  request.r(i3043[15], i3043[16], 0, i3042, 'targetTexture')
  i3042.usePhysicalProperties = !!i3043[17]
  i3042.focalLength = i3043[18]
  i3042.sensorSize = new pc.Vec2( i3043[19], i3043[20] )
  i3042.lensShift = new pc.Vec2( i3043[21], i3043[22] )
  i3042.gateFit = i3043[23]
  return i3042
}

Deserializers["CameraSizeByResolution"] = function (request, data, root) {
  var i3044 = root || request.c( 'CameraSizeByResolution' )
  var i3045 = data
  i3044.DebugUpdateCam = !!i3045[0]
  i3044.referencePortraitResolution = new pc.Vec2( i3045[1], i3045[2] )
  i3044.portraitTargetSize = i3045[3]
  i3044.landscapeTargetSize = i3045[4]
  return i3044
}

Deserializers["PlayingManager"] = function (request, data, root) {
  var i3046 = root || request.c( 'PlayingManager' )
  var i3047 = data
  i3046.CanClickPiece = !!i3047[0]
  i3046.playableLengthConfig = i3047[1]
  i3046.playableStageConfig = i3047[2]
  i3046.currentGameState = i3047[3]
  request.r(i3047[4], i3047[5], 0, i3046, 'boardClassic8x8')
  request.r(i3047[6], i3047[7], 0, i3046, 'boardClassic10x10')
  request.r(i3047[8], i3047[9], 0, i3046, 'boardHexa')
  request.r(i3047[10], i3047[11], 0, i3046, 'currentBoard')
  request.r(i3047[12], i3047[13], 0, i3046, 'fakeStageContinuation')
  request.r(i3047[14], i3047[15], 0, i3046, 'stageBG')
  return i3046
}

Deserializers["BoosterManager"] = function (request, data, root) {
  var i3048 = root || request.c( 'BoosterManager' )
  var i3049 = data
  i3048.boosterType = i3049[0]
  var i3051 = i3049[1]
  var i3050 = new (System.Collections.Generic.List$1(Bridge.ns('BoosterManager+HintInfor')))
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.add(request.d('BoosterManager+HintInfor', i3051[i + 0]));
  }
  i3048.hintInfors = i3050
  request.r(i3049[2], i3049[3], 0, i3048, 'textBoosterOneBlock')
  request.r(i3049[4], i3049[5], 0, i3048, 'textBoosterOneHorizontal')
  request.r(i3049[6], i3049[7], 0, i3048, 'textBoosterOneVertical')
  request.r(i3049[8], i3049[9], 0, i3048, 'textBoosterBack')
  var i3053 = i3049[10]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 2) {
  request.r(i3053[i + 0], i3053[i + 1], 2, i3052, '')
  }
  i3048.rectButtonsBooster = i3052
  request.r(i3049[11], i3049[12], 0, i3048, 'hammerObj')
  request.r(i3049[13], i3049[14], 0, i3048, 'hammerAnimation')
  i3048.testMode = !!i3049[15]
  return i3048
}

Deserializers["BoosterManager+HintInfor"] = function (request, data, root) {
  var i3056 = root || request.c( 'BoosterManager+HintInfor' )
  var i3057 = data
  i3056.boosterType = i3057[0]
  i3056.start = i3057[1]
  i3056.current = i3057[2]
  i3056.adsCanGet = i3057[3]
  return i3056
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i3060 = root || request.c( 'TutorialManager' )
  var i3061 = data
  request.r(i3061[0], i3061[1], 0, i3060, 'handObject')
  i3060.from = new pc.Vec3( i3061[2], i3061[3], i3061[4] )
  i3060.to = new pc.Vec3( i3061[5], i3061[6], i3061[7] )
  i3060.isUpdate = !!i3061[8]
  request.r(i3061[9], i3061[10], 0, i3060, 'highLightPiecePlace')
  i3060.smoothSpeed = i3061[11]
  var i3063 = i3061[12]
  var i3062 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i3063.length; i += 2) {
  request.r(i3063[i + 0], i3063[i + 1], 1, i3062, '')
  }
  i3060.tutorialBoardDatasClassic = i3062
  var i3065 = i3061[13]
  var i3064 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i3065.length; i += 2) {
  request.r(i3065[i + 0], i3065[i + 1], 1, i3064, '')
  }
  i3060.tutorialBoardDatasClassic10x10 = i3064
  var i3067 = i3061[14]
  var i3066 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialBoardData')))
  for(var i = 0; i < i3067.length; i += 2) {
  request.r(i3067[i + 0], i3067[i + 1], 1, i3066, '')
  }
  i3060.tutorialBoardDatasHexa = i3066
  request.r(i3061[15], i3061[16], 0, i3060, 'popupCanvas')
  request.r(i3061[17], i3061[18], 0, i3060, 'fadePopup')
  i3060.layerPopupTutorial = i3061[19]
  return i3060
}

Deserializers["TutorialBoardData"] = function (request, data, root) {
  var i3070 = root || request.c( 'TutorialBoardData' )
  var i3071 = data
  request.r(i3071[0], i3071[1], 0, i3070, 'boardTutorial')
  var i3073 = i3071[2]
  var i3072 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.add(!!i3073[i + 0]);
  }
  i3070.tutorialData = i3072
  request.r(i3071[3], i3071[4], 0, i3070, 'targetHand')
  request.r(i3071[5], i3071[6], 0, i3070, 'beginHand')
  i3070.piecesID = i3071[7]
  var i3075 = i3071[8]
  var i3074 = new (System.Collections.Generic.List$1(Bridge.ns('BlockBoard')))
  for(var i = 0; i < i3075.length; i += 2) {
  request.r(i3075[i + 0], i3075[i + 1], 1, i3074, '')
  }
  i3070.blocksBoardCanPlace = i3074
  return i3070
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3076 = root || request.c( 'CameraController' )
  var i3077 = data
  i3076.doCameraZoom = !!i3077[0]
  request.r(i3077[1], i3077[2], 0, i3076, 'csr')
  i3076.cameraZoomLevels = i3077[3]
  i3076.landscapeOffset = i3077[4]
  i3076.zoomOutDuration = i3077[5]
  return i3076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3079 = data
  request.r(i3079[0], i3079[1], 0, i3078, 'clip')
  request.r(i3079[2], i3079[3], 0, i3078, 'outputAudioMixerGroup')
  i3078.playOnAwake = !!i3079[4]
  i3078.loop = !!i3079[5]
  i3078.time = i3079[6]
  i3078.volume = i3079[7]
  i3078.pitch = i3079[8]
  i3078.enabled = !!i3079[9]
  return i3078
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i3080 = root || request.c( 'SoundManager' )
  var i3081 = data
  var i3083 = i3081[0]
  var i3082 = new (System.Collections.Generic.List$1(Bridge.ns('SoundClipInfor')))
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.add(request.d('SoundClipInfor', i3083[i + 0]));
  }
  i3080.soundClipInfors = i3082
  request.r(i3081[1], i3081[2], 0, i3080, 'musicSource')
  request.r(i3081[3], i3081[4], 0, i3080, 'soundSource')
  request.r(i3081[5], i3081[6], 0, i3080, 'countLoop')
  return i3080
}

Deserializers["SoundClipInfor"] = function (request, data, root) {
  var i3086 = root || request.c( 'SoundClipInfor' )
  var i3087 = data
  i3086.id = i3087[0]
  request.r(i3087[1], i3087[2], 0, i3086, 'audioClip')
  i3086.clipVolume = i3087[3]
  return i3086
}

Deserializers["ScreenFrameWork.ScreenManager"] = function (request, data, root) {
  var i3088 = root || request.c( 'ScreenFrameWork.ScreenManager' )
  var i3089 = data
  i3088.homeScreenId = i3089[0]
  var i3091 = i3089[1]
  var i3090 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenFrameWork.Screen')))
  for(var i = 0; i < i3091.length; i += 2) {
  request.r(i3091[i + 0], i3091[i + 1], 1, i3090, '')
  }
  i3088.screens = i3090
  var i3093 = i3089[2]
  var i3092 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.add(i3093[i + 0]);
  }
  i3088.backStack = i3092
  return i3088
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3098 = root || request.c( 'GameManager' )
  var i3099 = data
  i3098.SCORE_ONE_BLOCK = i3099[0]
  i3098.SCORE_DESTROY_ONE_BLOCK = i3099[1]
  i3098.CurrentDataGameMode = i3099[2]
  request.r(i3099[3], i3099[4], 0, i3098, 'bestScoreText')
  request.r(i3099[5], i3099[6], 0, i3098, 'currentScoreText')
  i3098.boardType = i3099[7]
  i3098.gameMode = i3099[8]
  var i3101 = i3099[9]
  var i3100 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i3101.length; i += 2) {
  request.r(i3101[i + 0], i3101[i + 1], 1, i3100, '')
  }
  i3098.buttonsInGame = i3100
  i3098.dataInGame = request.d('DataInGame', i3099[10], i3098.dataInGame)
  i3098.gameSetting = request.d('GameSetting', i3099[11], i3098.gameSetting)
  i3098.rateURL = i3099[12]
  request.r(i3099[13], i3099[14], 0, i3098, 'retryWindow')
  return i3098
}

Deserializers["DataInGame"] = function (request, data, root) {
  var i3104 = root || request.c( 'DataInGame' )
  var i3105 = data
  var i3107 = i3105[0]
  var i3106 = new (System.Collections.Generic.List$1(Bridge.ns('DataMode')))
  for(var i = 0; i < i3107.length; i += 1) {
    i3106.add(request.d('DataMode', i3107[i + 0]));
  }
  i3104.dataGameModes = i3106
  i3104.jsonGameMode = i3105[1]
  return i3104
}

Deserializers["DataMode"] = function (request, data, root) {
  var i3110 = root || request.c( 'DataMode' )
  var i3111 = data
  i3110.dataGameMode = i3111[0]
  i3110.currentScore = i3111[1]
  i3110.bestScore = i3111[2]
  var i3113 = i3111[3]
  var i3112 = new (System.Collections.Generic.List$1(Bridge.ns('DataPlacePiece')))
  for(var i = 0; i < i3113.length; i += 1) {
    i3112.add(request.d('DataPlacePiece', i3113[i + 0]));
  }
  i3110.dataPlacePieces = i3112
  var i3115 = i3111[4]
  var i3114 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.add(i3115[i + 0]);
  }
  i3110.blocksModeIndex = i3114
  i3110.piecesId = i3111[5]
  var i3117 = i3111[6]
  var i3116 = new (System.Collections.Generic.List$1(Bridge.ns('BombDetail')))
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.add(request.d('BombDetail', i3117[i + 0]));
  }
  i3110.bombDetails = i3116
  i3110.stepBomb = i3111[7]
  i3110.jsonPlacePieces = i3111[8]
  return i3110
}

Deserializers["GameSetting"] = function (request, data, root) {
  var i3118 = root || request.c( 'GameSetting' )
  var i3119 = data
  i3118.muteMusic = !!i3119[0]
  i3118.muteSound = !!i3119[1]
  i3118.tutorialClassic = !!i3119[2]
  i3118.tutorialHexa = !!i3119[3]
  i3118.fillTimer = i3119[4]
  return i3118
}

Deserializers["PrefabsManager"] = function (request, data, root) {
  var i3120 = root || request.c( 'PrefabsManager' )
  var i3121 = data
  request.r(i3121[0], i3121[1], 0, i3120, 'blockPrefab')
  request.r(i3121[2], i3121[3], 0, i3120, 'blockHexaPrefab')
  request.r(i3121[4], i3121[5], 0, i3120, 'effDestroyBlockPrefab')
  request.r(i3121[6], i3121[7], 0, i3120, 'effDestroyBlockHexaPrefab')
  request.r(i3121[8], i3121[9], 0, i3120, 'swordPrefab')
  request.r(i3121[10], i3121[11], 0, i3120, 'scoreTextEffect')
  request.r(i3121[12], i3121[13], 0, i3120, 'arrowPrefab')
  request.r(i3121[14], i3121[15], 0, i3120, 'bombItemPrefab')
  request.r(i3121[16], i3121[17], 0, i3120, 'effectTime')
  var i3123 = i3121[18]
  var i3122 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i3123.length; i += 2) {
  request.r(i3123[i + 0], i3123[i + 1], 1, i3122, '')
  }
  i3120.piecesClassicPrefab = i3122
  var i3125 = i3121[19]
  var i3124 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i3125.length; i += 2) {
  request.r(i3125[i + 0], i3125[i + 1], 1, i3124, '')
  }
  i3120.piecesHexaPrefab = i3124
  request.r(i3121[20], i3121[21], 0, i3120, 'piecesContainer')
  request.r(i3121[22], i3121[23], 0, i3120, 'piecesHexaContainer')
  i3120.scalePiece = i3121[24]
  return i3120
}

Deserializers["PieceManager"] = function (request, data, root) {
  var i3128 = root || request.c( 'PieceManager' )
  var i3129 = data
  var i3131 = i3129[0]
  var i3130 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3131.length; i += 2) {
  request.r(i3131[i + 0], i3131[i + 1], 1, i3130, '')
  }
  i3128.pointsPlaceBlock = i3130
  request.r(i3129[1], i3129[2], 0, i3128, 'pointsPlaceNextBlock')
  var i3133 = i3129[3]
  var i3132 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i3133.length; i += 2) {
  request.r(i3133[i + 0], i3133[i + 1], 1, i3132, '')
  }
  i3128.pieces = i3132
  var i3135 = i3129[4]
  var i3134 = []
  for(var i = 0; i < i3135.length; i += 2) {
  request.r(i3135[i + 0], i3135[i + 1], 2, i3134, '')
  }
  i3128.piecesInGame = i3134
  request.r(i3129[5], i3129[6], 0, i3128, 'tutorialPointer')
  var i3137 = i3129[7]
  var i3136 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.add(i3137[i + 0]);
  }
  i3128.predeterminedPieces = i3136
  i3128.idleTimeBeforeTutorial = i3129[8]
  request.r(i3129[9], i3129[10], 0, i3128, 'tutorialText')
  return i3128
}

Deserializers["EffectManager"] = function (request, data, root) {
  var i3144 = root || request.c( 'EffectManager' )
  var i3145 = data
  return i3144
}

Deserializers["PopUpFrameWork.PopupManager"] = function (request, data, root) {
  var i3146 = root || request.c( 'PopUpFrameWork.PopupManager' )
  var i3147 = data
  var i3149 = i3147[0]
  var i3148 = new (System.Collections.Generic.List$1(Bridge.ns('PopUpFrameWork.PopupManager+PopupInfo')))
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.add(request.d('PopUpFrameWork.PopupManager+PopupInfo', i3149[i + 0]));
  }
  i3146.popupInfos = i3148
  return i3146
}

Deserializers["PopUpFrameWork.PopupManager+PopupInfo"] = function (request, data, root) {
  var i3152 = root || request.c( 'PopUpFrameWork.PopupManager+PopupInfo' )
  var i3153 = data
  i3152.popupId = i3153[0]
  request.r(i3153[1], i3153[2], 0, i3152, 'popup')
  return i3152
}

Deserializers["SpriteManager"] = function (request, data, root) {
  var i3154 = root || request.c( 'SpriteManager' )
  var i3155 = data
  var i3157 = i3155[0]
  var i3156 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3157.length; i += 2) {
  request.r(i3157[i + 0], i3157[i + 1], 1, i3156, '')
  }
  i3154.blocksContainer3D = i3156
  var i3159 = i3155[1]
  var i3158 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3159.length; i += 2) {
  request.r(i3159[i + 0], i3159[i + 1], 1, i3158, '')
  }
  i3154.blocksContainer2D = i3158
  var i3161 = i3155[2]
  var i3160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3161.length; i += 2) {
  request.r(i3161[i + 0], i3161[i + 1], 1, i3160, '')
  }
  i3154.blockShow2D = i3160
  var i3163 = i3155[3]
  var i3162 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3163.length; i += 2) {
  request.r(i3163[i + 0], i3163[i + 1], 1, i3162, '')
  }
  i3154.blockShow3D = i3162
  var i3165 = i3155[4]
  var i3164 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3165.length; i += 2) {
  request.r(i3165[i + 0], i3165[i + 1], 1, i3164, '')
  }
  i3154.textEffects = i3164
  var i3167 = i3155[5]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 2) {
  request.r(i3167[i + 0], i3167[i + 1], 2, i3166, '')
  }
  i3154.blockColorSprites = i3166
  var i3169 = i3155[6]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 2) {
  request.r(i3169[i + 0], i3169[i + 1], 2, i3168, '')
  }
  i3154.blockGemSprites = i3168
  return i3154
}

Deserializers["BombMode"] = function (request, data, root) {
  var i3172 = root || request.c( 'BombMode' )
  var i3173 = data
  i3172.gameMode = i3173[0]
  var i3175 = i3173[1]
  var i3174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3175.length; i += 2) {
  request.r(i3175[i + 0], i3175[i + 1], 1, i3174, '')
  }
  i3172.objsUsedInMode = i3174
  var i3177 = i3173[2]
  var i3176 = new (System.Collections.Generic.List$1(Bridge.ns('BombItem')))
  for(var i = 0; i < i3177.length; i += 2) {
  request.r(i3177[i + 0], i3177[i + 1], 1, i3176, '')
  }
  i3172.bombItems = i3176
  return i3172
}

Deserializers["TimeMode"] = function (request, data, root) {
  var i3180 = root || request.c( 'TimeMode' )
  var i3181 = data
  i3180.gameMode = i3181[0]
  request.r(i3181[1], i3181[2], 0, i3180, 'processTime')
  request.r(i3181[3], i3181[4], 0, i3180, 'iconTime')
  var i3183 = i3181[5]
  var i3182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3183.length; i += 2) {
  request.r(i3183[i + 0], i3183[i + 1], 1, i3182, '')
  }
  i3180.objsUsedInMode = i3182
  return i3180
}

Deserializers["EmptyMode"] = function (request, data, root) {
  var i3184 = root || request.c( 'EmptyMode' )
  var i3185 = data
  i3184.gameMode = i3185[0]
  var i3187 = i3185[1]
  var i3186 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3187.length; i += 2) {
  request.r(i3187[i + 0], i3187[i + 1], 1, i3186, '')
  }
  i3184.objsUsedInMode = i3186
  return i3184
}

Deserializers["OrientationManager"] = function (request, data, root) {
  var i3188 = root || request.c( 'OrientationManager' )
  var i3189 = data
  return i3188
}

Deserializers["BlockColorApplier"] = function (request, data, root) {
  var i3190 = root || request.c( 'BlockColorApplier' )
  var i3191 = data
  i3190.rayLength = i3191[0]
  i3190.rayDirection = new pc.Vec2( i3191[1], i3191[2] )
  i3190.targetTag = i3191[3]
  i3190.currentColor = i3191[4]
  i3190.currentGemColor = i3191[5]
  var i3193 = i3191[6]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 2) {
  request.r(i3193[i + 0], i3193[i + 1], 2, i3192, '')
  }
  i3190.previewBlocks = i3192
  var i3195 = i3191[7]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 2, i3194, '')
  }
  i3190.previewGemBlocks = i3194
  return i3190
}

Deserializers["FPSController"] = function (request, data, root) {
  var i3198 = root || request.c( 'FPSController' )
  var i3199 = data
  request.r(i3199[0], i3199[1], 0, i3198, 'fpsText')
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3201 = data
  request.r(i3201[0], i3201[1], 0, i3200, 'additionalVertexStreams')
  i3200.enabled = !!i3201[2]
  request.r(i3201[3], i3201[4], 0, i3200, 'sharedMaterial')
  var i3203 = i3201[5]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 2) {
  request.r(i3203[i + 0], i3203[i + 1], 2, i3202, '')
  }
  i3200.sharedMaterials = i3202
  i3200.receiveShadows = !!i3201[6]
  i3200.shadowCastingMode = i3201[7]
  i3200.sortingLayerID = i3201[8]
  i3200.sortingOrder = i3201[9]
  i3200.lightmapIndex = i3201[10]
  i3200.lightmapSceneIndex = i3201[11]
  i3200.lightmapScaleOffset = new pc.Vec4( i3201[12], i3201[13], i3201[14], i3201[15] )
  i3200.lightProbeUsage = i3201[16]
  i3200.reflectionProbeUsage = i3201[17]
  return i3200
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i3204 = root || request.c( 'TMPro.TextMeshPro' )
  var i3205 = data
  i3204._SortingLayer = i3205[0]
  i3204._SortingLayerID = i3205[1]
  i3204._SortingOrder = i3205[2]
  i3204.m_hasFontAssetChanged = !!i3205[3]
  request.r(i3205[4], i3205[5], 0, i3204, 'm_renderer')
  i3204.m_maskType = i3205[6]
  i3204.m_text = i3205[7]
  i3204.m_isRightToLeft = !!i3205[8]
  request.r(i3205[9], i3205[10], 0, i3204, 'm_fontAsset')
  request.r(i3205[11], i3205[12], 0, i3204, 'm_sharedMaterial')
  var i3207 = i3205[13]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 2) {
  request.r(i3207[i + 0], i3207[i + 1], 2, i3206, '')
  }
  i3204.m_fontSharedMaterials = i3206
  request.r(i3205[14], i3205[15], 0, i3204, 'm_fontMaterial')
  var i3209 = i3205[16]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 2) {
  request.r(i3209[i + 0], i3209[i + 1], 2, i3208, '')
  }
  i3204.m_fontMaterials = i3208
  i3204.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3205[17], i3205[18], i3205[19], i3205[20])
  i3204.m_fontColor = new pc.Color(i3205[21], i3205[22], i3205[23], i3205[24])
  i3204.m_enableVertexGradient = !!i3205[25]
  i3204.m_colorMode = i3205[26]
  i3204.m_fontColorGradient = request.d('TMPro.VertexGradient', i3205[27], i3204.m_fontColorGradient)
  request.r(i3205[28], i3205[29], 0, i3204, 'm_fontColorGradientPreset')
  request.r(i3205[30], i3205[31], 0, i3204, 'm_spriteAsset')
  i3204.m_tintAllSprites = !!i3205[32]
  request.r(i3205[33], i3205[34], 0, i3204, 'm_StyleSheet')
  i3204.m_TextStyleHashCode = i3205[35]
  i3204.m_overrideHtmlColors = !!i3205[36]
  i3204.m_faceColor = UnityEngine.Color32.ConstructColor(i3205[37], i3205[38], i3205[39], i3205[40])
  i3204.m_fontSize = i3205[41]
  i3204.m_fontSizeBase = i3205[42]
  i3204.m_fontWeight = i3205[43]
  i3204.m_enableAutoSizing = !!i3205[44]
  i3204.m_fontSizeMin = i3205[45]
  i3204.m_fontSizeMax = i3205[46]
  i3204.m_fontStyle = i3205[47]
  i3204.m_HorizontalAlignment = i3205[48]
  i3204.m_VerticalAlignment = i3205[49]
  i3204.m_textAlignment = i3205[50]
  i3204.m_characterSpacing = i3205[51]
  i3204.m_wordSpacing = i3205[52]
  i3204.m_lineSpacing = i3205[53]
  i3204.m_lineSpacingMax = i3205[54]
  i3204.m_paragraphSpacing = i3205[55]
  i3204.m_charWidthMaxAdj = i3205[56]
  i3204.m_enableWordWrapping = !!i3205[57]
  i3204.m_wordWrappingRatios = i3205[58]
  i3204.m_overflowMode = i3205[59]
  request.r(i3205[60], i3205[61], 0, i3204, 'm_linkedTextComponent')
  request.r(i3205[62], i3205[63], 0, i3204, 'parentLinkedComponent')
  i3204.m_enableKerning = !!i3205[64]
  i3204.m_enableExtraPadding = !!i3205[65]
  i3204.checkPaddingRequired = !!i3205[66]
  i3204.m_isRichText = !!i3205[67]
  i3204.m_parseCtrlCharacters = !!i3205[68]
  i3204.m_isOrthographic = !!i3205[69]
  i3204.m_isCullingEnabled = !!i3205[70]
  i3204.m_horizontalMapping = i3205[71]
  i3204.m_verticalMapping = i3205[72]
  i3204.m_uvLineOffset = i3205[73]
  i3204.m_geometrySortingOrder = i3205[74]
  i3204.m_IsTextObjectScaleStatic = !!i3205[75]
  i3204.m_VertexBufferAutoSizeReduction = !!i3205[76]
  i3204.m_useMaxVisibleDescender = !!i3205[77]
  i3204.m_pageToDisplay = i3205[78]
  i3204.m_margin = new pc.Vec4( i3205[79], i3205[80], i3205[81], i3205[82] )
  i3204.m_isUsingLegacyAnimationComponent = !!i3205[83]
  i3204.m_isVolumetricText = !!i3205[84]
  request.r(i3205[85], i3205[86], 0, i3204, 'm_Material')
  i3204.m_Maskable = !!i3205[87]
  i3204.m_Color = new pc.Color(i3205[88], i3205[89], i3205[90], i3205[91])
  i3204.m_RaycastTarget = !!i3205[92]
  i3204.m_RaycastPadding = new pc.Vec4( i3205[93], i3205[94], i3205[95], i3205[96] )
  return i3204
}

Deserializers["RestartStage"] = function (request, data, root) {
  var i3210 = root || request.c( 'RestartStage' )
  var i3211 = data
  return i3210
}

Deserializers["EndcardManagement"] = function (request, data, root) {
  var i3212 = root || request.c( 'EndcardManagement' )
  var i3213 = data
  request.r(i3213[0], i3213[1], 0, i3212, 'endcard')
  i3212.automaticRedirectTimeWindow = i3213[2]
  i3212.autoRedirectEndcard = !!i3213[3]
  i3212.configName = i3213[4]
  return i3212
}

Deserializers["ParticleEffectManager"] = function (request, data, root) {
  var i3214 = root || request.c( 'ParticleEffectManager' )
  var i3215 = data
  request.r(i3215[0], i3215[1], 0, i3214, 'dustPrefab')
  request.r(i3215[2], i3215[3], 0, i3214, 'blockPlacePrefab')
  i3214.initialPoolSize = i3215[4]
  return i3214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3217 = data
  i3216.ambientIntensity = i3217[0]
  i3216.reflectionIntensity = i3217[1]
  i3216.ambientMode = i3217[2]
  i3216.ambientLight = new pc.Color(i3217[3], i3217[4], i3217[5], i3217[6])
  i3216.ambientSkyColor = new pc.Color(i3217[7], i3217[8], i3217[9], i3217[10])
  i3216.ambientGroundColor = new pc.Color(i3217[11], i3217[12], i3217[13], i3217[14])
  i3216.ambientEquatorColor = new pc.Color(i3217[15], i3217[16], i3217[17], i3217[18])
  i3216.fogColor = new pc.Color(i3217[19], i3217[20], i3217[21], i3217[22])
  i3216.fogEndDistance = i3217[23]
  i3216.fogStartDistance = i3217[24]
  i3216.fogDensity = i3217[25]
  i3216.fog = !!i3217[26]
  request.r(i3217[27], i3217[28], 0, i3216, 'skybox')
  i3216.fogMode = i3217[29]
  var i3219 = i3217[30]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3219[i + 0]) );
  }
  i3216.lightmaps = i3218
  i3216.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3217[31], i3216.lightProbes)
  i3216.lightmapsMode = i3217[32]
  i3216.mixedBakeMode = i3217[33]
  i3216.environmentLightingMode = i3217[34]
  i3216.ambientProbe = new pc.SphericalHarmonicsL2(i3217[35])
  i3216.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3217[36])
  i3216.useReferenceAmbientProbe = !!i3217[37]
  request.r(i3217[38], i3217[39], 0, i3216, 'customReflection')
  request.r(i3217[40], i3217[41], 0, i3216, 'defaultReflection')
  i3216.defaultReflectionMode = i3217[42]
  i3216.defaultReflectionResolution = i3217[43]
  i3216.sunLightObjectId = i3217[44]
  i3216.pixelLightCount = i3217[45]
  i3216.defaultReflectionHDR = !!i3217[46]
  i3216.hasLightDataAsset = !!i3217[47]
  i3216.hasManualGenerate = !!i3217[48]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3223 = data
  request.r(i3223[0], i3223[1], 0, i3222, 'lightmapColor')
  request.r(i3223[2], i3223[3], 0, i3222, 'lightmapDirection')
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3224 = root || new UnityEngine.LightProbes()
  var i3225 = data
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3233 = data
  var i3235 = i3233[0]
  var i3234 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3235[i + 0]));
  }
  i3232.ShaderCompilationErrors = i3234
  i3232.name = i3233[1]
  i3232.guid = i3233[2]
  var i3237 = i3233[3]
  var i3236 = []
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.push( i3237[i + 0] );
  }
  i3232.shaderDefinedKeywords = i3236
  var i3239 = i3233[4]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3239[i + 0]) );
  }
  i3232.passes = i3238
  var i3241 = i3233[5]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3241[i + 0]) );
  }
  i3232.usePasses = i3240
  var i3243 = i3233[6]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3243[i + 0]) );
  }
  i3232.defaultParameterValues = i3242
  request.r(i3233[7], i3233[8], 0, i3232, 'unityFallbackShader')
  i3232.readDepth = !!i3233[9]
  i3232.isCreatedByShaderGraph = !!i3233[10]
  i3232.usedBatchUniforms = i3233[11]
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3247 = data
  i3246.shaderName = i3247[0]
  i3246.errorMessage = i3247[1]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3252 = root || new pc.UnityShaderPass()
  var i3253 = data
  i3252.id = i3253[0]
  i3252.subShaderIndex = i3253[1]
  i3252.name = i3253[2]
  i3252.passType = i3253[3]
  i3252.grabPassTextureName = i3253[4]
  i3252.usePass = !!i3253[5]
  i3252.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[6], i3252.zTest)
  i3252.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[7], i3252.zWrite)
  i3252.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[8], i3252.culling)
  i3252.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3253[9], i3252.blending)
  i3252.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3253[10], i3252.alphaBlending)
  i3252.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[11], i3252.colorWriteMask)
  i3252.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[12], i3252.offsetUnits)
  i3252.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[13], i3252.offsetFactor)
  i3252.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[14], i3252.stencilRef)
  i3252.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[15], i3252.stencilReadMask)
  i3252.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3253[16], i3252.stencilWriteMask)
  i3252.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3253[17], i3252.stencilOp)
  i3252.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3253[18], i3252.stencilOpFront)
  i3252.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3253[19], i3252.stencilOpBack)
  var i3255 = i3253[20]
  var i3254 = []
  for(var i = 0; i < i3255.length; i += 1) {
    i3254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3255[i + 0]) );
  }
  i3252.tags = i3254
  var i3257 = i3253[21]
  var i3256 = []
  for(var i = 0; i < i3257.length; i += 1) {
    i3256.push( i3257[i + 0] );
  }
  i3252.passDefinedKeywords = i3256
  var i3259 = i3253[22]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3259[i + 0]) );
  }
  i3252.passDefinedKeywordGroups = i3258
  var i3261 = i3253[23]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3261[i + 0]) );
  }
  i3252.variants = i3260
  var i3263 = i3253[24]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3263[i + 0]) );
  }
  i3252.excludedVariants = i3262
  i3252.hasDepthReader = !!i3253[25]
  return i3252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3265 = data
  i3264.val = i3265[0]
  i3264.name = i3265[1]
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3267 = data
  i3266.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3267[0], i3266.src)
  i3266.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3267[1], i3266.dst)
  i3266.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3267[2], i3266.op)
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3269 = data
  i3268.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3269[0], i3268.pass)
  i3268.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3269[1], i3268.fail)
  i3268.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3269[2], i3268.zFail)
  i3268.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3269[3], i3268.comp)
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3273 = data
  i3272.name = i3273[0]
  i3272.value = i3273[1]
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3277 = data
  var i3279 = i3277[0]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 1) {
    i3278.push( i3279[i + 0] );
  }
  i3276.keywords = i3278
  i3276.hasDiscard = !!i3277[1]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3283 = data
  i3282.passId = i3283[0]
  i3282.subShaderIndex = i3283[1]
  var i3285 = i3283[2]
  var i3284 = []
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.push( i3285[i + 0] );
  }
  i3282.keywords = i3284
  i3282.vertexProgram = i3283[3]
  i3282.fragmentProgram = i3283[4]
  i3282.compiledForWebGL2 = !!i3283[5]
  i3282.readDepth = !!i3283[6]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3289 = data
  request.r(i3289[0], i3289[1], 0, i3288, 'shader')
  i3288.pass = i3289[2]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3293 = data
  i3292.name = i3293[0]
  i3292.type = i3293[1]
  i3292.value = new pc.Vec4( i3293[2], i3293[3], i3293[4], i3293[5] )
  i3292.textureValue = i3293[6]
  i3292.shaderPropertyFlag = i3293[7]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3295 = data
  i3294.name = i3295[0]
  request.r(i3295[1], i3295[2], 0, i3294, 'texture')
  i3294.aabb = i3295[3]
  i3294.vertices = i3295[4]
  i3294.triangles = i3295[5]
  i3294.textureRect = UnityEngine.Rect.MinMaxRect(i3295[6], i3295[7], i3295[8], i3295[9])
  i3294.packedRect = UnityEngine.Rect.MinMaxRect(i3295[10], i3295[11], i3295[12], i3295[13])
  i3294.border = new pc.Vec4( i3295[14], i3295[15], i3295[16], i3295[17] )
  i3294.transparency = i3295[18]
  i3294.bounds = i3295[19]
  i3294.pixelsPerUnit = i3295[20]
  i3294.textureWidth = i3295[21]
  i3294.textureHeight = i3295[22]
  i3294.nativeSize = new pc.Vec2( i3295[23], i3295[24] )
  i3294.pivot = new pc.Vec2( i3295[25], i3295[26] )
  i3294.textureRectOffset = new pc.Vec2( i3295[27], i3295[28] )
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3297 = data
  i3296.name = i3297[0]
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3299 = data
  i3298.name = i3299[0]
  i3298.wrapMode = i3299[1]
  i3298.isLooping = !!i3299[2]
  i3298.length = i3299[3]
  var i3301 = i3299[4]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3301[i + 0]) );
  }
  i3298.curves = i3300
  var i3303 = i3299[5]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3303[i + 0]) );
  }
  i3298.events = i3302
  i3298.halfPrecision = !!i3299[6]
  i3298._frameRate = i3299[7]
  i3298.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3299[8], i3298.localBounds)
  i3298.hasMuscleCurves = !!i3299[9]
  var i3305 = i3299[10]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( i3305[i + 0] );
  }
  i3298.clipMuscleConstant = i3304
  i3298.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3299[11], i3298.clipBindingConstant)
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3309 = data
  i3308.path = i3309[0]
  i3308.hash = i3309[1]
  i3308.componentType = i3309[2]
  i3308.property = i3309[3]
  i3308.keys = i3309[4]
  var i3311 = i3309[5]
  var i3310 = []
  for(var i = 0; i < i3311.length; i += 1) {
    i3310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3311[i + 0]) );
  }
  i3308.objectReferenceKeys = i3310
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3315 = data
  i3314.time = i3315[0]
  request.r(i3315[1], i3315[2], 0, i3314, 'value')
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3319 = data
  i3318.functionName = i3319[0]
  i3318.floatParameter = i3319[1]
  i3318.intParameter = i3319[2]
  i3318.stringParameter = i3319[3]
  request.r(i3319[4], i3319[5], 0, i3318, 'objectReferenceParameter')
  i3318.time = i3319[6]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3321 = data
  i3320.center = new pc.Vec3( i3321[0], i3321[1], i3321[2] )
  i3320.extends = new pc.Vec3( i3321[3], i3321[4], i3321[5] )
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3325 = data
  var i3327 = i3325[0]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( i3327[i + 0] );
  }
  i3324.genericBindings = i3326
  var i3329 = i3325[1]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( i3329[i + 0] );
  }
  i3324.pptrCurveMapping = i3328
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3331 = data
  i3330.name = i3331[0]
  i3330.ascent = i3331[1]
  i3330.originalLineHeight = i3331[2]
  i3330.fontSize = i3331[3]
  var i3333 = i3331[4]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3333[i + 0]) );
  }
  i3330.characterInfo = i3332
  request.r(i3331[5], i3331[6], 0, i3330, 'texture')
  i3330.originalFontSize = i3331[7]
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3337 = data
  i3336.index = i3337[0]
  i3336.advance = i3337[1]
  i3336.bearing = i3337[2]
  i3336.glyphWidth = i3337[3]
  i3336.glyphHeight = i3337[4]
  i3336.minX = i3337[5]
  i3336.maxX = i3337[6]
  i3336.minY = i3337[7]
  i3336.maxY = i3337[8]
  i3336.uvBottomLeftX = i3337[9]
  i3336.uvBottomLeftY = i3337[10]
  i3336.uvBottomRightX = i3337[11]
  i3336.uvBottomRightY = i3337[12]
  i3336.uvTopLeftX = i3337[13]
  i3336.uvTopLeftY = i3337[14]
  i3336.uvTopRightX = i3337[15]
  i3336.uvTopRightY = i3337[16]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3339 = data
  i3338.name = i3339[0]
  var i3341 = i3339[1]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3341[i + 0]) );
  }
  i3338.layers = i3340
  var i3343 = i3339[2]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 1) {
    i3342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3343[i + 0]) );
  }
  i3338.parameters = i3342
  i3338.animationClips = i3339[3]
  i3338.avatarUnsupported = i3339[4]
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3347 = data
  i3346.name = i3347[0]
  i3346.defaultWeight = i3347[1]
  i3346.blendingMode = i3347[2]
  i3346.avatarMask = i3347[3]
  i3346.syncedLayerIndex = i3347[4]
  i3346.syncedLayerAffectsTiming = !!i3347[5]
  i3346.syncedLayers = i3347[6]
  i3346.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3347[7], i3346.stateMachine)
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3349 = data
  i3348.id = i3349[0]
  i3348.name = i3349[1]
  i3348.path = i3349[2]
  var i3351 = i3349[3]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3351[i + 0]) );
  }
  i3348.states = i3350
  var i3353 = i3349[4]
  var i3352 = []
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3353[i + 0]) );
  }
  i3348.machines = i3352
  var i3355 = i3349[5]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3355[i + 0]) );
  }
  i3348.entryStateTransitions = i3354
  var i3357 = i3349[6]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 1) {
    i3356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3357[i + 0]) );
  }
  i3348.exitStateTransitions = i3356
  var i3359 = i3349[7]
  var i3358 = []
  for(var i = 0; i < i3359.length; i += 1) {
    i3358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3359[i + 0]) );
  }
  i3348.anyStateTransitions = i3358
  i3348.defaultStateId = i3349[8]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3363 = data
  i3362.id = i3363[0]
  i3362.name = i3363[1]
  i3362.cycleOffset = i3363[2]
  i3362.cycleOffsetParameter = i3363[3]
  i3362.cycleOffsetParameterActive = !!i3363[4]
  i3362.mirror = !!i3363[5]
  i3362.mirrorParameter = i3363[6]
  i3362.mirrorParameterActive = !!i3363[7]
  i3362.motionId = i3363[8]
  i3362.nameHash = i3363[9]
  i3362.fullPathHash = i3363[10]
  i3362.speed = i3363[11]
  i3362.speedParameter = i3363[12]
  i3362.speedParameterActive = !!i3363[13]
  i3362.tag = i3363[14]
  i3362.tagHash = i3363[15]
  i3362.writeDefaultValues = !!i3363[16]
  var i3365 = i3363[17]
  var i3364 = []
  for(var i = 0; i < i3365.length; i += 2) {
  request.r(i3365[i + 0], i3365[i + 1], 2, i3364, '')
  }
  i3362.behaviours = i3364
  var i3367 = i3363[18]
  var i3366 = []
  for(var i = 0; i < i3367.length; i += 1) {
    i3366.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3367[i + 0]) );
  }
  i3362.transitions = i3366
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3373 = data
  i3372.fullPath = i3373[0]
  i3372.canTransitionToSelf = !!i3373[1]
  i3372.duration = i3373[2]
  i3372.exitTime = i3373[3]
  i3372.hasExitTime = !!i3373[4]
  i3372.hasFixedDuration = !!i3373[5]
  i3372.interruptionSource = i3373[6]
  i3372.offset = i3373[7]
  i3372.orderedInterruption = !!i3373[8]
  i3372.destinationStateId = i3373[9]
  i3372.isExit = !!i3373[10]
  i3372.mute = !!i3373[11]
  i3372.solo = !!i3373[12]
  var i3375 = i3373[13]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3375[i + 0]) );
  }
  i3372.conditions = i3374
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3381 = data
  i3380.destinationStateId = i3381[0]
  i3380.isExit = !!i3381[1]
  i3380.mute = !!i3381[2]
  i3380.solo = !!i3381[3]
  var i3383 = i3381[4]
  var i3382 = []
  for(var i = 0; i < i3383.length; i += 1) {
    i3382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3383[i + 0]) );
  }
  i3380.conditions = i3382
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3387 = data
  i3386.defaultBool = !!i3387[0]
  i3386.defaultFloat = i3387[1]
  i3386.defaultInt = i3387[2]
  i3386.name = i3387[3]
  i3386.nameHash = i3387[4]
  i3386.type = i3387[5]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3391 = data
  i3390.mode = i3391[0]
  i3390.parameter = i3391[1]
  i3390.threshold = i3391[2]
  return i3390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3393 = data
  i3392.name = i3393[0]
  i3392.bytes64 = i3393[1]
  i3392.data = i3393[2]
  return i3392
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3394 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3395 = data
  i3394.hashCode = i3395[0]
  request.r(i3395[1], i3395[2], 0, i3394, 'material')
  i3394.materialHashCode = i3395[3]
  request.r(i3395[4], i3395[5], 0, i3394, 'atlas')
  i3394.normalStyle = i3395[6]
  i3394.normalSpacingOffset = i3395[7]
  i3394.boldStyle = i3395[8]
  i3394.boldSpacing = i3395[9]
  i3394.italicStyle = i3395[10]
  i3394.tabSize = i3395[11]
  i3394.m_Version = i3395[12]
  i3394.m_SourceFontFileGUID = i3395[13]
  request.r(i3395[14], i3395[15], 0, i3394, 'm_SourceFontFile_EditorRef')
  request.r(i3395[16], i3395[17], 0, i3394, 'm_SourceFontFile')
  i3394.m_AtlasPopulationMode = i3395[18]
  i3394.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3395[19], i3394.m_FaceInfo)
  var i3397 = i3395[20]
  var i3396 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.add(request.d('UnityEngine.TextCore.Glyph', i3397[i + 0]));
  }
  i3394.m_GlyphTable = i3396
  var i3399 = i3395[21]
  var i3398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.add(request.d('TMPro.TMP_Character', i3399[i + 0]));
  }
  i3394.m_CharacterTable = i3398
  var i3401 = i3395[22]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 2) {
  request.r(i3401[i + 0], i3401[i + 1], 2, i3400, '')
  }
  i3394.m_AtlasTextures = i3400
  i3394.m_AtlasTextureIndex = i3395[23]
  i3394.m_IsMultiAtlasTexturesEnabled = !!i3395[24]
  i3394.m_ClearDynamicDataOnBuild = !!i3395[25]
  var i3403 = i3395[26]
  var i3402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3403.length; i += 1) {
    i3402.add(request.d('UnityEngine.TextCore.GlyphRect', i3403[i + 0]));
  }
  i3394.m_UsedGlyphRects = i3402
  var i3405 = i3395[27]
  var i3404 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3405.length; i += 1) {
    i3404.add(request.d('UnityEngine.TextCore.GlyphRect', i3405[i + 0]));
  }
  i3394.m_FreeGlyphRects = i3404
  i3394.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3395[28], i3394.m_fontInfo)
  i3394.m_AtlasWidth = i3395[29]
  i3394.m_AtlasHeight = i3395[30]
  i3394.m_AtlasPadding = i3395[31]
  i3394.m_AtlasRenderMode = i3395[32]
  var i3407 = i3395[33]
  var i3406 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3407.length; i += 1) {
    i3406.add(request.d('TMPro.TMP_Glyph', i3407[i + 0]));
  }
  i3394.m_glyphInfoList = i3406
  i3394.m_KerningTable = request.d('TMPro.KerningTable', i3395[34], i3394.m_KerningTable)
  i3394.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3395[35], i3394.m_FontFeatureTable)
  var i3409 = i3395[36]
  var i3408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3409.length; i += 2) {
  request.r(i3409[i + 0], i3409[i + 1], 1, i3408, '')
  }
  i3394.fallbackFontAssets = i3408
  var i3411 = i3395[37]
  var i3410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3411.length; i += 2) {
  request.r(i3411[i + 0], i3411[i + 1], 1, i3410, '')
  }
  i3394.m_FallbackFontAssetTable = i3410
  i3394.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3395[38], i3394.m_CreationSettings)
  var i3413 = i3395[39]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( request.d('TMPro.TMP_FontWeightPair', i3413[i + 0]) );
  }
  i3394.m_FontWeightTable = i3412
  var i3415 = i3395[40]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 1) {
    i3414.push( request.d('TMPro.TMP_FontWeightPair', i3415[i + 0]) );
  }
  i3394.fontWeights = i3414
  return i3394
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3416 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3417 = data
  i3416.m_FaceIndex = i3417[0]
  i3416.m_FamilyName = i3417[1]
  i3416.m_StyleName = i3417[2]
  i3416.m_PointSize = i3417[3]
  i3416.m_Scale = i3417[4]
  i3416.m_UnitsPerEM = i3417[5]
  i3416.m_LineHeight = i3417[6]
  i3416.m_AscentLine = i3417[7]
  i3416.m_CapLine = i3417[8]
  i3416.m_MeanLine = i3417[9]
  i3416.m_Baseline = i3417[10]
  i3416.m_DescentLine = i3417[11]
  i3416.m_SuperscriptOffset = i3417[12]
  i3416.m_SuperscriptSize = i3417[13]
  i3416.m_SubscriptOffset = i3417[14]
  i3416.m_SubscriptSize = i3417[15]
  i3416.m_UnderlineOffset = i3417[16]
  i3416.m_UnderlineThickness = i3417[17]
  i3416.m_StrikethroughOffset = i3417[18]
  i3416.m_StrikethroughThickness = i3417[19]
  i3416.m_TabWidth = i3417[20]
  return i3416
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3420 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3421 = data
  i3420.m_Index = i3421[0]
  i3420.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3421[1], i3420.m_Metrics)
  i3420.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3421[2], i3420.m_GlyphRect)
  i3420.m_Scale = i3421[3]
  i3420.m_AtlasIndex = i3421[4]
  i3420.m_ClassDefinitionType = i3421[5]
  return i3420
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3422 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3423 = data
  i3422.m_Width = i3423[0]
  i3422.m_Height = i3423[1]
  i3422.m_HorizontalBearingX = i3423[2]
  i3422.m_HorizontalBearingY = i3423[3]
  i3422.m_HorizontalAdvance = i3423[4]
  return i3422
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3424 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3425 = data
  i3424.m_X = i3425[0]
  i3424.m_Y = i3425[1]
  i3424.m_Width = i3425[2]
  i3424.m_Height = i3425[3]
  return i3424
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3428 = root || request.c( 'TMPro.TMP_Character' )
  var i3429 = data
  i3428.m_ElementType = i3429[0]
  i3428.m_Unicode = i3429[1]
  i3428.m_GlyphIndex = i3429[2]
  i3428.m_Scale = i3429[3]
  return i3428
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3434 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3435 = data
  i3434.Name = i3435[0]
  i3434.PointSize = i3435[1]
  i3434.Scale = i3435[2]
  i3434.CharacterCount = i3435[3]
  i3434.LineHeight = i3435[4]
  i3434.Baseline = i3435[5]
  i3434.Ascender = i3435[6]
  i3434.CapHeight = i3435[7]
  i3434.Descender = i3435[8]
  i3434.CenterLine = i3435[9]
  i3434.SuperscriptOffset = i3435[10]
  i3434.SubscriptOffset = i3435[11]
  i3434.SubSize = i3435[12]
  i3434.Underline = i3435[13]
  i3434.UnderlineThickness = i3435[14]
  i3434.strikethrough = i3435[15]
  i3434.strikethroughThickness = i3435[16]
  i3434.TabWidth = i3435[17]
  i3434.Padding = i3435[18]
  i3434.AtlasWidth = i3435[19]
  i3434.AtlasHeight = i3435[20]
  return i3434
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3438 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3439 = data
  i3438.id = i3439[0]
  i3438.x = i3439[1]
  i3438.y = i3439[2]
  i3438.width = i3439[3]
  i3438.height = i3439[4]
  i3438.xOffset = i3439[5]
  i3438.yOffset = i3439[6]
  i3438.xAdvance = i3439[7]
  i3438.scale = i3439[8]
  return i3438
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3440 = root || request.c( 'TMPro.KerningTable' )
  var i3441 = data
  var i3443 = i3441[0]
  var i3442 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3443.length; i += 1) {
    i3442.add(request.d('TMPro.KerningPair', i3443[i + 0]));
  }
  i3440.kerningPairs = i3442
  return i3440
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3446 = root || request.c( 'TMPro.KerningPair' )
  var i3447 = data
  i3446.xOffset = i3447[0]
  i3446.m_FirstGlyph = i3447[1]
  i3446.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3447[2], i3446.m_FirstGlyphAdjustments)
  i3446.m_SecondGlyph = i3447[3]
  i3446.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3447[4], i3446.m_SecondGlyphAdjustments)
  i3446.m_IgnoreSpacingAdjustments = !!i3447[5]
  return i3446
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3448 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3449 = data
  var i3451 = i3449[0]
  var i3450 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3451[i + 0]));
  }
  i3448.m_GlyphPairAdjustmentRecords = i3450
  return i3448
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3454 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3455 = data
  i3454.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3455[0], i3454.m_FirstAdjustmentRecord)
  i3454.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3455[1], i3454.m_SecondAdjustmentRecord)
  i3454.m_FeatureLookupFlags = i3455[2]
  return i3454
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3458 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3459 = data
  i3458.sourceFontFileName = i3459[0]
  i3458.sourceFontFileGUID = i3459[1]
  i3458.pointSizeSamplingMode = i3459[2]
  i3458.pointSize = i3459[3]
  i3458.padding = i3459[4]
  i3458.packingMode = i3459[5]
  i3458.atlasWidth = i3459[6]
  i3458.atlasHeight = i3459[7]
  i3458.characterSetSelectionMode = i3459[8]
  i3458.characterSequence = i3459[9]
  i3458.referencedFontAssetGUID = i3459[10]
  i3458.referencedTextAssetGUID = i3459[11]
  i3458.fontStyle = i3459[12]
  i3458.fontStyleModifier = i3459[13]
  i3458.renderMode = i3459[14]
  i3458.includeFontFeatures = !!i3459[15]
  return i3458
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3462 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3463 = data
  request.r(i3463[0], i3463[1], 0, i3462, 'regularTypeface')
  request.r(i3463[2], i3463[3], 0, i3462, 'italicTypeface')
  return i3462
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3464 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3465 = data
  i3464.m_GlyphIndex = i3465[0]
  i3464.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3465[1], i3464.m_GlyphValueRecord)
  return i3464
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3466 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3467 = data
  i3466.m_XPlacement = i3467[0]
  i3466.m_YPlacement = i3467[1]
  i3466.m_XAdvance = i3467[2]
  i3466.m_YAdvance = i3467[3]
  return i3466
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3468 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3469 = data
  i3468.useSafeMode = !!i3469[0]
  i3468.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3469[1], i3468.safeModeOptions)
  i3468.timeScale = i3469[2]
  i3468.unscaledTimeScale = i3469[3]
  i3468.useSmoothDeltaTime = !!i3469[4]
  i3468.maxSmoothUnscaledTime = i3469[5]
  i3468.rewindCallbackMode = i3469[6]
  i3468.showUnityEditorReport = !!i3469[7]
  i3468.logBehaviour = i3469[8]
  i3468.drawGizmos = !!i3469[9]
  i3468.defaultRecyclable = !!i3469[10]
  i3468.defaultAutoPlay = i3469[11]
  i3468.defaultUpdateType = i3469[12]
  i3468.defaultTimeScaleIndependent = !!i3469[13]
  i3468.defaultEaseType = i3469[14]
  i3468.defaultEaseOvershootOrAmplitude = i3469[15]
  i3468.defaultEasePeriod = i3469[16]
  i3468.defaultAutoKill = !!i3469[17]
  i3468.defaultLoopType = i3469[18]
  i3468.debugMode = !!i3469[19]
  i3468.debugStoreTargetId = !!i3469[20]
  i3468.showPreviewPanel = !!i3469[21]
  i3468.storeSettingsLocation = i3469[22]
  i3468.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3469[23], i3468.modules)
  i3468.createASMDEF = !!i3469[24]
  i3468.showPlayingTweens = !!i3469[25]
  i3468.showPausedTweens = !!i3469[26]
  return i3468
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3470 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3471 = data
  i3470.logBehaviour = i3471[0]
  i3470.nestedTweenFailureBehaviour = i3471[1]
  return i3470
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3472 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3473 = data
  i3472.showPanel = !!i3473[0]
  i3472.audioEnabled = !!i3473[1]
  i3472.physicsEnabled = !!i3473[2]
  i3472.physics2DEnabled = !!i3473[3]
  i3472.spriteEnabled = !!i3473[4]
  i3472.uiEnabled = !!i3473[5]
  i3472.textMeshProEnabled = !!i3473[6]
  i3472.tk2DEnabled = !!i3473[7]
  i3472.deAudioEnabled = !!i3473[8]
  i3472.deUnityExtendedEnabled = !!i3473[9]
  i3472.epoOutlineEnabled = !!i3473[10]
  return i3472
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3474 = root || request.c( 'TMPro.TMP_Settings' )
  var i3475 = data
  i3474.m_enableWordWrapping = !!i3475[0]
  i3474.m_enableKerning = !!i3475[1]
  i3474.m_enableExtraPadding = !!i3475[2]
  i3474.m_enableTintAllSprites = !!i3475[3]
  i3474.m_enableParseEscapeCharacters = !!i3475[4]
  i3474.m_EnableRaycastTarget = !!i3475[5]
  i3474.m_GetFontFeaturesAtRuntime = !!i3475[6]
  i3474.m_missingGlyphCharacter = i3475[7]
  i3474.m_warningsDisabled = !!i3475[8]
  request.r(i3475[9], i3475[10], 0, i3474, 'm_defaultFontAsset')
  i3474.m_defaultFontAssetPath = i3475[11]
  i3474.m_defaultFontSize = i3475[12]
  i3474.m_defaultAutoSizeMinRatio = i3475[13]
  i3474.m_defaultAutoSizeMaxRatio = i3475[14]
  i3474.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3475[15], i3475[16] )
  i3474.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3475[17], i3475[18] )
  i3474.m_autoSizeTextContainer = !!i3475[19]
  i3474.m_IsTextObjectScaleStatic = !!i3475[20]
  var i3477 = i3475[21]
  var i3476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3477.length; i += 2) {
  request.r(i3477[i + 0], i3477[i + 1], 1, i3476, '')
  }
  i3474.m_fallbackFontAssets = i3476
  i3474.m_matchMaterialPreset = !!i3475[22]
  request.r(i3475[23], i3475[24], 0, i3474, 'm_defaultSpriteAsset')
  i3474.m_defaultSpriteAssetPath = i3475[25]
  i3474.m_enableEmojiSupport = !!i3475[26]
  i3474.m_MissingCharacterSpriteUnicode = i3475[27]
  i3474.m_defaultColorGradientPresetsPath = i3475[28]
  request.r(i3475[29], i3475[30], 0, i3474, 'm_defaultStyleSheet')
  i3474.m_StyleSheetsResourcePath = i3475[31]
  request.r(i3475[32], i3475[33], 0, i3474, 'm_leadingCharacters')
  request.r(i3475[34], i3475[35], 0, i3474, 'm_followingCharacters')
  i3474.m_UseModernHangulLineBreakingRules = !!i3475[36]
  return i3474
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3478 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3479 = data
  i3478.hashCode = i3479[0]
  request.r(i3479[1], i3479[2], 0, i3478, 'material')
  i3478.materialHashCode = i3479[3]
  request.r(i3479[4], i3479[5], 0, i3478, 'spriteSheet')
  var i3481 = i3479[6]
  var i3480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3481.length; i += 1) {
    i3480.add(request.d('TMPro.TMP_Sprite', i3481[i + 0]));
  }
  i3478.spriteInfoList = i3480
  var i3483 = i3479[7]
  var i3482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3483.length; i += 2) {
  request.r(i3483[i + 0], i3483[i + 1], 1, i3482, '')
  }
  i3478.fallbackSpriteAssets = i3482
  i3478.m_Version = i3479[8]
  i3478.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3479[9], i3478.m_FaceInfo)
  var i3485 = i3479[10]
  var i3484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.add(request.d('TMPro.TMP_SpriteCharacter', i3485[i + 0]));
  }
  i3478.m_SpriteCharacterTable = i3484
  var i3487 = i3479[11]
  var i3486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.add(request.d('TMPro.TMP_SpriteGlyph', i3487[i + 0]));
  }
  i3478.m_SpriteGlyphTable = i3486
  return i3478
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3490 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3491 = data
  i3490.name = i3491[0]
  i3490.hashCode = i3491[1]
  i3490.unicode = i3491[2]
  i3490.pivot = new pc.Vec2( i3491[3], i3491[4] )
  request.r(i3491[5], i3491[6], 0, i3490, 'sprite')
  i3490.id = i3491[7]
  i3490.x = i3491[8]
  i3490.y = i3491[9]
  i3490.width = i3491[10]
  i3490.height = i3491[11]
  i3490.xOffset = i3491[12]
  i3490.yOffset = i3491[13]
  i3490.xAdvance = i3491[14]
  i3490.scale = i3491[15]
  return i3490
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3496 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3497 = data
  i3496.m_Name = i3497[0]
  i3496.m_HashCode = i3497[1]
  i3496.m_ElementType = i3497[2]
  i3496.m_Unicode = i3497[3]
  i3496.m_GlyphIndex = i3497[4]
  i3496.m_Scale = i3497[5]
  return i3496
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3500 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'sprite')
  i3500.m_Index = i3501[2]
  i3500.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3501[3], i3500.m_Metrics)
  i3500.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3501[4], i3500.m_GlyphRect)
  i3500.m_Scale = i3501[5]
  i3500.m_AtlasIndex = i3501[6]
  i3500.m_ClassDefinitionType = i3501[7]
  return i3500
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3502 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3503 = data
  var i3505 = i3503[0]
  var i3504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3505.length; i += 1) {
    i3504.add(request.d('TMPro.TMP_Style', i3505[i + 0]));
  }
  i3502.m_StyleList = i3504
  return i3502
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3508 = root || request.c( 'TMPro.TMP_Style' )
  var i3509 = data
  i3508.m_Name = i3509[0]
  i3508.m_HashCode = i3509[1]
  i3508.m_OpeningDefinition = i3509[2]
  i3508.m_ClosingDefinition = i3509[3]
  i3508.m_OpeningTagArray = i3509[4]
  i3508.m_ClosingTagArray = i3509[5]
  i3508.m_OpeningTagUnicodeArray = i3509[6]
  i3508.m_ClosingTagUnicodeArray = i3509[7]
  return i3508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3511 = data
  var i3513 = i3511[0]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 1) {
    i3512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3513[i + 0]) );
  }
  i3510.files = i3512
  i3510.componentToPrefabIds = i3511[1]
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3517 = data
  i3516.path = i3517[0]
  request.r(i3517[1], i3517[2], 0, i3516, 'unityObject')
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3519 = data
  var i3521 = i3519[0]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3521[i + 0]) );
  }
  i3518.scriptsExecutionOrder = i3520
  var i3523 = i3519[1]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3523[i + 0]) );
  }
  i3518.sortingLayers = i3522
  var i3525 = i3519[2]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3525[i + 0]) );
  }
  i3518.cullingLayers = i3524
  i3518.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3519[3], i3518.timeSettings)
  i3518.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3519[4], i3518.physicsSettings)
  i3518.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3519[5], i3518.physics2DSettings)
  i3518.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3519[6], i3518.qualitySettings)
  i3518.enableRealtimeShadows = !!i3519[7]
  i3518.enableAutoInstancing = !!i3519[8]
  i3518.enableDynamicBatching = !!i3519[9]
  i3518.lightmapEncodingQuality = i3519[10]
  i3518.desiredColorSpace = i3519[11]
  var i3527 = i3519[12]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( i3527[i + 0] );
  }
  i3518.allTags = i3526
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3531 = data
  i3530.name = i3531[0]
  i3530.value = i3531[1]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3535 = data
  i3534.id = i3535[0]
  i3534.name = i3535[1]
  i3534.value = i3535[2]
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3539 = data
  i3538.id = i3539[0]
  i3538.name = i3539[1]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3541 = data
  i3540.fixedDeltaTime = i3541[0]
  i3540.maximumDeltaTime = i3541[1]
  i3540.timeScale = i3541[2]
  i3540.maximumParticleTimestep = i3541[3]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3543 = data
  i3542.gravity = new pc.Vec3( i3543[0], i3543[1], i3543[2] )
  i3542.defaultSolverIterations = i3543[3]
  i3542.bounceThreshold = i3543[4]
  i3542.autoSyncTransforms = !!i3543[5]
  i3542.autoSimulation = !!i3543[6]
  var i3545 = i3543[7]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3545[i + 0]) );
  }
  i3542.collisionMatrix = i3544
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3549 = data
  i3548.enabled = !!i3549[0]
  i3548.layerId = i3549[1]
  i3548.otherLayerId = i3549[2]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3551 = data
  request.r(i3551[0], i3551[1], 0, i3550, 'material')
  i3550.gravity = new pc.Vec2( i3551[2], i3551[3] )
  i3550.positionIterations = i3551[4]
  i3550.velocityIterations = i3551[5]
  i3550.velocityThreshold = i3551[6]
  i3550.maxLinearCorrection = i3551[7]
  i3550.maxAngularCorrection = i3551[8]
  i3550.maxTranslationSpeed = i3551[9]
  i3550.maxRotationSpeed = i3551[10]
  i3550.baumgarteScale = i3551[11]
  i3550.baumgarteTOIScale = i3551[12]
  i3550.timeToSleep = i3551[13]
  i3550.linearSleepTolerance = i3551[14]
  i3550.angularSleepTolerance = i3551[15]
  i3550.defaultContactOffset = i3551[16]
  i3550.autoSimulation = !!i3551[17]
  i3550.queriesHitTriggers = !!i3551[18]
  i3550.queriesStartInColliders = !!i3551[19]
  i3550.callbacksOnDisable = !!i3551[20]
  i3550.reuseCollisionCallbacks = !!i3551[21]
  i3550.autoSyncTransforms = !!i3551[22]
  var i3553 = i3551[23]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3553[i + 0]) );
  }
  i3550.collisionMatrix = i3552
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3557 = data
  i3556.enabled = !!i3557[0]
  i3556.layerId = i3557[1]
  i3556.otherLayerId = i3557[2]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3559 = data
  var i3561 = i3559[0]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 1) {
    i3560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3561[i + 0]) );
  }
  i3558.qualityLevels = i3560
  var i3563 = i3559[1]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 1) {
    i3562.push( i3563[i + 0] );
  }
  i3558.names = i3562
  i3558.shadows = i3559[2]
  i3558.anisotropicFiltering = i3559[3]
  i3558.antiAliasing = i3559[4]
  i3558.lodBias = i3559[5]
  i3558.shadowCascades = i3559[6]
  i3558.shadowDistance = i3559[7]
  i3558.shadowmaskMode = i3559[8]
  i3558.shadowProjection = i3559[9]
  i3558.shadowResolution = i3559[10]
  i3558.softParticles = !!i3559[11]
  i3558.softVegetation = !!i3559[12]
  i3558.activeColorSpace = i3559[13]
  i3558.desiredColorSpace = i3559[14]
  i3558.masterTextureLimit = i3559[15]
  i3558.maxQueuedFrames = i3559[16]
  i3558.particleRaycastBudget = i3559[17]
  i3558.pixelLightCount = i3559[18]
  i3558.realtimeReflectionProbes = !!i3559[19]
  i3558.shadowCascade2Split = i3559[20]
  i3558.shadowCascade4Split = new pc.Vec3( i3559[21], i3559[22], i3559[23] )
  i3558.streamingMipmapsActive = !!i3559[24]
  i3558.vSyncCount = i3559[25]
  i3558.asyncUploadBufferSize = i3559[26]
  i3558.asyncUploadTimeSlice = i3559[27]
  i3558.billboardsFaceCameraPosition = !!i3559[28]
  i3558.shadowNearPlaneOffset = i3559[29]
  i3558.streamingMipmapsMemoryBudget = i3559[30]
  i3558.maximumLODLevel = i3559[31]
  i3558.streamingMipmapsAddAllCameras = !!i3559[32]
  i3558.streamingMipmapsMaxLevelReduction = i3559[33]
  i3558.streamingMipmapsRenderersPerFrame = i3559[34]
  i3558.resolutionScalingFixedDPIFactor = i3559[35]
  i3558.streamingMipmapsMaxFileIORequests = i3559[36]
  i3558.currentQualityLevel = i3559[37]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3569 = data
  i3568.weight = i3569[0]
  i3568.vertices = i3569[1]
  i3568.normals = i3569[2]
  i3568.tangents = i3569[3]
  return i3568
}

Deserializers["DataPlacePiece"] = function (request, data, root) {
  var i3572 = root || request.c( 'DataPlacePiece' )
  var i3573 = data
  var i3575 = i3573[0]
  var i3574 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.add(i3575[i + 0]);
  }
  i3572.blocksShowIndex = i3574
  var i3577 = i3573[1]
  var i3576 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i3577.length; i += 1) {
    i3576.add(i3577[i + 0]);
  }
  i3572.blocksHideIndex = i3576
  i3572.pieces = i3573[2]
  i3572.DestroyLine = !!i3573[3]
  i3572.dataPosition = i3573[4]
  i3572.dataPieces = i3573[5]
  i3572.dataPiecesShape = i3573[6]
  i3572.datablocksHideIndex = i3573[7]
  i3572.datablocksShowIndex = i3573[8]
  i3572.dataBombsIndex = i3573[9]
  return i3572
}

Deserializers["BombDetail"] = function (request, data, root) {
  var i3580 = root || request.c( 'BombDetail' )
  var i3581 = data
  i3580.bombIndex = i3581[0]
  i3580.stepBomb = i3581[1]
  return i3580
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3582 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3583 = data
  i3582.xPlacement = i3583[0]
  i3582.yPlacement = i3583[1]
  i3582.xAdvance = i3583[2]
  i3582.yAdvance = i3583[3]
  return i3582
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"101":[102],"103":[102],"104":[102],"105":[102],"106":[102],"107":[102],"108":[109],"68":[41],"110":[111],"112":[111],"113":[111],"114":[111],"115":[111],"116":[111],"117":[111],"118":[20],"119":[20],"120":[20],"121":[20],"122":[20],"123":[20],"124":[20],"125":[20],"126":[20],"127":[20],"128":[20],"129":[20],"130":[20],"131":[41],"132":[91],"133":[134],"135":[134],"21":[12],"136":[40],"137":[138],"139":[3],"140":[138],"141":[12],"142":[12],"31":[21],"15":[16,12],"53":[12],"30":[21],"143":[12],"144":[12],"44":[12],"145":[12],"39":[12],"146":[12],"38":[12],"147":[12],"148":[12],"149":[16,12],"150":[12],"151":[12],"152":[12],"153":[12],"49":[16,12],"154":[12],"155":[66],"156":[66],"67":[66],"157":[66],"158":[41],"159":[41],"160":[161],"162":[41],"163":[12],"90":[91,12],"14":[12,16],"164":[12],"165":[16,12],"166":[91],"167":[16,12],"168":[12],"169":[138]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","BoardContainer","BlockBoard","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.RectTransform","GemCounter","TMPro.TextMeshProUGUI","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","DestroyByTime","UnityEngine.Rigidbody2D","UnityEngine.Canvas","BlockObj","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","EffectObj","BoosterMoveDestroy","BombItem","UnityEngine.GameObject","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","CurveMove","Piece","UnityEngine.BoxCollider","TutorialPointerBehaviour","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Camera","MenuScreen","AdjustRectTransformForSafeArea","UnityEngine.UI.HorizontalLayoutGroup","SoundButton","LayoutSupportDisplay","UIAnimation","GameScreen","UnityEngine.UI.Text","UnityEngine.UI.Shadow","UnityEngine.CanvasGroup","PopUpFrameWork.PopupManager","UnityEngine.UI.AspectRatioFitter","RectTransformByOrientation","BoosterManager","DOTWeenPulseAnim","TransformByOrientation","UnityEngine.Rendering.SortingGroup","EndcardManagement","PopUpFrameWork.Popup","SecondChancePopup","SettingPopup","GameOverPopup","FadeOutCanvasGroup","UnityEventOnEnable","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.FlareLayer","UnityEngine.AudioListener","CameraSizeByResolution","PlayingManager","TutorialManager","TutorialBoardData","CameraController","UnityEngine.AudioSource","SoundManager","UnityEngine.AudioClip","ScreenFrameWork.ScreenManager","GameManager","PrefabsManager","PieceManager","EffectManager","SpriteManager","BombMode","TimeMode","EmptyMode","OrientationManager","BlockColorApplier","FPSController","TMPro.TextMeshPro","UnityEngine.MeshRenderer","RestartStage","ParticleEffectManager","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ScreenFrameWork.ScreenBackButton","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.34f1";

Deserializers.productName = "BasePlayworksProject";

Deserializers.lunaInitializationTime = "10/07/2024 11:22:37";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "5022";

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

Deserializers.buildID = "a47a6bd5-04e6-43b8-af7c-79017237b309";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

